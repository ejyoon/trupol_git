# trupol_ana_preprocess

rm(list=ls())
library(ggplot2)
library(plyr)
library(dplyr)
library(tidyr)
source("/Users/ericang/Documents/Research/Politeness/trupol_git/data_analysis/helper/useful.R")

d <- read.csv("/Users/ericang/Documents/Research/Politeness/trupol_git/data_analysis/data/trupol_data.csv")
log <- read.csv("/Users/ericang/Documents/Research/Politeness/trupol_git/data_analysis/info/trupol_subj.csv")

# join with subj log
d <- join(d, log)

# select key vars 
d <- d %>%
  select(subid, Age, trial1_2_evalCorrect, trial1_2_playCorrect, trial3_4_playCorrect, trial3_4_evalCorrect, trial1_niceness, trial2_niceness, trial3_niceness, trial4_niceness, trial1_Lfeel_val, trial2_Lfeel_val, trial3_Lfeel_val, trial4_Lfeel_val)

# categorize age
d$Age <- as.numeric(as.character(d$Age))
d <- cbind(d, age_cat = cut(d$Age, breaks=c(3, 4, 5, 6, 7)))
levels(d$age_cat) <- c("3", "4", "5", "6")

# reshape data
d <- d %>%
  gather("q", "answer", 3:14)

# add columns to categorize vars
d1 <- d %>%
  mutate(polite = factor(substring(q, 1, 8),
                         levels = c("trial1_2", "trial3_4", 
                                    "trial1_n", "trial2_n", "trial3_n", "trial4_n",
                                    "trial1_L", "trial2_L", "trial3_L", "trial4_L"),
                         labels = c("NA", "NA",
                                    "impolite", "polite", "polite", "impolite",
                                    "impolite", "polite", "polite", "impolite")),
         q_kind = factor(substring(q, 8, 10),
                         levels = c("2_e", "2_p", "4_p", "4_e",
                                    "nic", "Lfe"),
                         labels = c("eval", "play", "play", "eval",
                                    "niceness", "Lfeel")))
d1$polite <- as.factor(as.character(d1$polite))
d1$q_kind <- as.factor(as.character(d1$q_kind))
d1$answer <- as.factor(as.character(d1$answer))
levels(d1$answer) <- c("NA", "NA", "0", "1", "2", "3", "4", "5", "0", "1")
d1$answer <- as.numeric(as.character(d1$answer))

# plot: eval and play
mss <- d1 %>%
  filter(q_kind == "play" | q_kind == "eval") %>%
  group_by(q_kind, age_cat, subid) %>%
  summarize(
    answer = mean(answer, na.rm=TRUE)
  )
ms <- aggregate(answer ~ q_kind + age_cat, mss, mean)
ms$cih <- aggregate(answer ~ q_kind + age_cat, mss, ci.high)$answer
ms$cil <- aggregate(answer ~ q_kind + age_cat, mss, ci.low)$answer

qplot(age_cat, answer, 
      fill = age_cat, 
      geom="bar", position = "dodge", stat="identity",
      data=subset(ms, answer!="NA")) + 
  facet_wrap(~q_kind) +
  geom_errorbar(aes(ymin=answer-cil,ymax=answer+cih,width=.1))

# plot: niceness
mss <- d1 %>%
  filter(q_kind == "niceness") %>%
  group_by(polite, age_cat, subid) %>%
  summarize(
    answer = mean(answer, na.rm=TRUE)
  )
ms <- aggregate(answer ~ polite + age_cat, mss, mean)
ms$cih <- aggregate(answer ~ polite + age_cat, mss, ci.high)$answer
ms$cil <- aggregate(answer ~ polite + age_cat, mss, ci.low)$answer

qplot(polite, answer, 
      fill = polite, 
      geom="bar", position = "dodge", stat="identity",
      data=subset(ms, answer!="NA")) + 
  facet_wrap(~age_cat) +
  geom_errorbar(aes(ymin=answer-cil,ymax=answer+cih,width=.1))

# plot: listener feeling inference
mss <- d1 %>%
  filter(q_kind == "Lfeel") %>%
  group_by(polite, age_cat, subid) %>%
  summarize(
    answer = mean(answer, na.rm=TRUE)
  )
ms <- aggregate(answer ~ polite + age_cat, mss, mean)
ms$cih <- aggregate(answer ~ polite + age_cat, mss, ci.high)$answer
ms$cil <- aggregate(answer ~ polite + age_cat, mss, ci.low)$answer

qplot(polite, answer, 
      fill = polite, 
      geom="bar", position = "dodge", stat="identity",
      data=subset(ms, answer!="NA")) + 
  facet_wrap(~age_cat) +
  geom_errorbar(aes(ymin=answer-cil,ymax=answer+cih,width=.1))
