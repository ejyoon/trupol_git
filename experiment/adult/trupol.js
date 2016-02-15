// Implook ver 0
// Overview: (i) Helper (ii) Parameters (iii) Control Flow

// ***WHAT'S BEEN DONE SO FAR***
// DISPLAY: ignorance implicature for Elmo
// ***INCLUDE STEPEXPERIMENT FUNCTION to only go on if it's real worker***
// ***CHANGE MAKER GETTER - 1) with actual numbers that I want 2) only decrement for real workers***
// check whether submiterator works if the webpage is empty? (i.e., is the html and js from the directory on my computer or from webpage? if the latter, what's the offline directory specified in the submiterator for?)


// ---------------- HELPER ------------------

function showSlide(id) {
  $(".slide").hide(); //jquery - all elements with class of slide - hide
  $("#"+id).show(); //jquery - element with given id - show
}

//array shuffle function
shuffle = function (o) { //v1.0
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x); //anything you want to randomize
    return o;
}

// random function
function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

function clearForm(oForm) {
  var sliderVar = "";
  for(var i=0; i<NUM_SLIDERS; i++)
  {
    sliderVar = "#slider" + i;
    $(sliderVar).slider("value", 20);
    $(sliderVar).css({"background":"#FFFFFF"});
    $(sliderVar + " .ui-slider-handle").css({
        "background":"#FAFAFA",
        "border-color": "#CCCCCC" });
    sliderVar = "slider" + i;
    document.getElementById(sliderVar).style.background = "";
  }
  
  var elements = oForm.elements; 
  
  oForm.reset();

  for(var i=0; i<elements.length; i++) {
    field_type = elements[i].type.toLowerCase();
    switch(field_type) {
    
      case "text": 
      case "password": 
      case "textarea":
            case "hidden":	
        
        elements[i].value = ""; 
        break;
          
      case "radio":
      case "checkbox":
          if (elements[i].checked) {
            elements[i].checked = false; 
        }
        break;
  
      case "select-one":
      case "select-multi":
                  elements[i].selectedIndex = -1;
        break;
  
      default: 
        break;
    }
  }
}

function getRadioCheckedValue(formNum, radio_name)
{
   var oRadio = document.forms[formNum].elements[radio_name];
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
   return '';
}



// ---------------- PARAMETERS ------------------
// *** Maker getter function***
// substitution for picking a random cond for now:
var filename = "EJY_trupol"
var condCounts = "1,20;2,20;" //Example: "cond1,#of ppl20;2,20;3,20" EDIT
var xmlHttp = null;
xmlHttp = new XMLHttpRequest(); 
xmlHttp.open( "GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + condCounts + "&filename=" + filename, false );
xmlHttp.send( null );
//var cond = xmlHttp.responseText; // For actual experimental runs
var list = random(4)+1; // (1-6) For testing only (before running actual)
//var list = 3;

// ---------------- CONTROL FLOW ------------------
//PRE-LOAD IMAGES
// By creating image object and setting source, images preload
if (list == 1) {
    var cond = "expt";
    var order = 1;
    var listeners = ["Edward", "Heather"];
    var speakers = ["Sally", "Mary", "Stanley", "Richard"];
    var speaker_types = ["honest", "polite", "polite", "honest"];
    var goals = ["nice", "mean", "telling the truth"];
    var item = ["cookie", "drawing"];
    var evaluation = ["yucky", "tasty", "pretty", "ugly"];
} else if (list == 2) {
    var cond = "expt";
    var order = 2;
    var listeners = ["Heather", "Edward"];
    var speakers = ["Stanley", "Richard", "Sally", "Mary"];
    var speaker_types = ["polite", "honest", "honest", "polite"];
    var goals = ["telling the truth", "mean", "nice"];
    var item = ["drawing", "cookie"];
    var evaluation = ["pretty", "ugly", "yucky", "tasty"];
} else if (list == 3) {
    var cond = "cont";
    var order = 1;
    var listeners = ["Edward", "Heather"];
    var speaker_types = ["honest", "polite", "polite", "honest"];
    var speakers = ["Sally", "Mary", "Stanley", "Richard"];
    var goals = ["nice", "mean", "telling the truth"];
    var item = ["cookie", "drawing"];
    var evaluation = ["yucky", "tasty", "pretty", "ugly"];
} else if (list == 4) {
    var cond = "cont";
    var order = 2;
    var listeners = ["Heather", "Edward"];
    var speakers = ["Stanley", "Richard", "Sally", "Mary"];
    var speaker_types = ["polite", "honest", "honest", "polite"];
    var goals = ["telling the truth", "mean", "nice"];
    var item = ["drawing", "cookie"];
    var evaluation = ["pretty", "ugly", "yucky", "tasty"];
}


var images = new Array() 
for (i=1;i<9;i++) {//loop through images you want to use
    images[i] = new Image()
    images[i].src =  "slides/"  + cond + order +  ".0" + i + ".jpeg"
    images[i].src =  "slides/"  + cond + order +  ".00" + i + ".jpeg"
    images[i] = new Image()
    images[i].src =  "slides/"  + cond + order +  ".0" + i + ".jpeg"
    images[i].src =  "slides/"  + cond + order +  ".00" + i + ".jpeg"

} 
for (i=10;i<25;i++) {//loop through images you want to use
    images[i] = new Image()
    images[i].src =  "slides/"  + cond + order + ".0" + i + ".jpeg"
    images[i] = new Image()
    images[i].src =  "slides/" + cond + order + ".0" + i + ".jpeg"
} 


showSlide("instructions");

// MAIN EXPERIMENT
var experiment = { // end, next, select
    
    data:{
    site: "US", //fixme for other sites
    experiment: "trupol",
    list: list,
    cond: cond, // randomize exp and cont
    order: order, // randomize 1 and 2
    age: "adult",
//    practice1_nice: [],
//    practice1_mean: [],
//    practice2_nice: [],
//    practice2_mean: [],
//    practice3_truth: [],
//    practice3_lie: [],
    trial1_comp_like: [],
    trial1_comp_tell: [],
    trial1_SWhy: [],
    trial1_LFeel: [],
    trial1_nice: [],
    trial1_mean: [],
    trial1_truth: [],
    trial2_comp_like: [],
    trial2_comp_tell: [],
    trial2_SWhy: [],
    trial2_LFeel: [],
    trial2_nice: [],
    trial2_mean: [],
    trial2_truth: [],
    trial1_2_play: [],   
    trial1_2_playWhy: [],   
    },
    
  instructions:function() {
    showSlide('instructions2')
  },

// FIXME: add practice questions
    
    slide001: function() {
        showSlide('slide001');
    
        var image001_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.001.jpeg" alt="slides/' + cond + order + '.001.jpeg" /></td></tr></table>'
			$("#image001").html(image001_html); //insert dynamically-built html code into html file; 

    },
    
    slide002: function() {
        showSlide('slide002');
    
        var image002_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.002.jpeg" alt="slides/' + cond + order + '.002.jpeg" /></td></tr></table>'
			$("#image002").html(image002_html); //insert dynamically-built html code into html file; 

    },
    
    slide003: function() {
        showSlide('slide003');
    
        var image003_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.003.jpeg" alt="slides/' + cond + order + '.003.jpeg" /></td></tr></table>'
        $("#image003").html(image003_html); //insert dynamically-built html code into html file; 
        $("#comp_check1_1").html("Did " + speakers[0] + " like the " + item[0] + "?"); // FIXME: Sally and cookie as variables so that they can change depending on condition
    },
    
    slide004: function() {
        var comp_check1 = getRadioCheckedValue(0, "cc1_1judgment");
        experiment.data.trial1_comp_like.push(comp_check1);
        showSlide('slide004');
        var image004_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.004.jpeg" alt="slides/' + cond + order + '.004.jpeg" /></td></tr></table>'
			$("#image004").html(image004_html); //insert dynamically-built html code into html file; 
            $("#comp_check1_2").html(speakers[0] +  " said to " + listeners[0] + " that the " + item[0] + " was:"); // FIXME: Sally and cookie as variables so that they can change depending on condition
            $("#comp_check1_2_adj1").html(evaluation[1])
            $("#comp_check1_2_adj2").html(evaluation[0])
    },
    
    slide005: function() {
//      var comp_check1 = getRadioCheckedValue(1, "cc1judgment");
//        if(comp_check1 == 1) {         $("#message_error").html('<font color="red">Your answer is incorrect! Try again.</font>');        
//} else if(comp_check1 == 0) {
//    showSlide("slide004")
//};
        var comp_check2 = getRadioCheckedValue(1, "cc1_2judgment");
        experiment.data.trial1_comp_tell.push(comp_check2);
        showSlide('slide005');
        var image005_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.005.jpeg" alt="slides/' + cond + order + '.005.jpeg" /></td></tr></table>'
			$("#image005").html(image005_html); //insert dynamically-built html code into html file; 
            $("#pretest1_1").html("Why did "  + speakers[0] +  " say that to " + listeners[0] + "?"); // FIXME
            $("#pretest1_2").html("How did " + listeners[0] + " feel?"); // FIXME
            $("#test1_1").html("Was "  + speakers[0] +  " " + goals[0] + "?"); // FIXME: counterbalance niceness, meanness and truth-telling
            $("#test1_2").html("Was "  + speakers[0] +  " " + goals[1] + "?"); // FIXME: counterbalance niceness, meanness and truth-telling
            $("#test1_3").html("Was "  + speakers[0] +  " " + goals[2] + "?"); // FIXME: counterbalance niceness, meanness and truth-telling

    },

//////////// SPEAKER 2 //////////
    slide006: function() {
        experiment.data.trial1_SWhy.push(document.getElementById("pretest1_1answer").value);  
experiment.data.trial1_LFeel.push(document.getElementById("pretest1_2answer").value);           
    if(order == 1) {
        var test1nice = getRadioCheckedValue(3, "test1_item1");
        var test1mean = getRadioCheckedValue(3, "test1_item2");
        var test1truth = getRadioCheckedValue(3, "test1_item3");            
    } else if (order == 2) {
        var test1nice = getRadioCheckedValue(3, "test1_item3");
        var test1mean = getRadioCheckedValue(3, "test1_item2");
        var test1truth = getRadioCheckedValue(3, "test1_item1");        
    }
        
experiment.data.trial1_nice.push(test1nice);  
experiment.data.trial1_mean.push(test1mean);  
experiment.data.trial1_truth.push(test1truth);  
     
        
        showSlide('slide006');    
        var image006_html = 
            '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.006.jpeg" alt="slides/' + cond + order + '.006.jpeg" /></td></tr></table>'
			$("#image006").html(image006_html); 
    },
    
    slide007: function() {
        showSlide('slide007');
        var image007_html = 
            '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.007.jpeg" alt="slides/' + cond + order + '.007.jpeg" /></td></tr></table>'
			$("#image007").html(image007_html);
    },
    
    slide008: function() {
        showSlide('slide008');    
        var image008_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.008.jpeg" alt="slides/' + cond + order + '.008.jpeg" /></td></tr></table>'
        $("#image008").html(image008_html);
        $("#comp_check2_1").html("Did " + speakers[1] + " like the " + item[0] + "?");
    },
    
    slide009: function() {
        var comp_check1 = getRadioCheckedValue(4, "cc2_1judgment");
        experiment.data.trial2_comp_like.push(comp_check1);
        showSlide('slide009');
        var image009_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.009.jpeg" alt="slides/' + cond + order + '.009.jpeg" /></td></tr></table>'
			$("#image009").html(image009_html);
            $("#comp_check2_2").html(speakers[1] +  " said to " + listeners[0] + " that the " + item[0] + " was:");
            $("#comp_check2_2_adj1").html(evaluation[0])
            $("#comp_check2_2_adj2").html(evaluation[1])
    },
    
    slide010: function() {
        var comp_check2 = getRadioCheckedValue(5, "cc2_2judgment");
        experiment.data.trial2_comp_tell.push(comp_check2);
        showSlide('slide010');
        var image010_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.010.jpeg" alt="slides/' + cond + order + '.010.jpeg" /></td></tr></table>'
			$("#image010").html(image010_html); 
            $("#pretest2_1").html("Why did "  + speakers[1] +  " say that to " + listeners[0] + "?");
            $("#pretest2_2").html("How did " + listeners[0] + " feel?");
            $("#test2_1").html("Was "  + speakers[1] +  " " + goals[0] + "?"); // FIXME: counterbalance niceness, meanness and truth-telling
            $("#test2_2").html("Was "  + speakers[1] +  " " + goals[1] + "?"); // FIXME: counterbalance niceness, meanness and truth-telling
            $("#test2_3").html("Was "  + speakers[1] +  " " + goals[2] + "?"); // FIXME: counterbalance niceness, meanness and truth-telling

    },
    
    
    slide011: function() {

        experiment.data.trial2_SWhy.push(document.getElementById("pretest2_1answer").value);  
experiment.data.trial2_LFeel.push(document.getElementById("pretest2_2answer").value);  
    if(order == 1) {
        var test2nice = getRadioCheckedValue(7, "test2_item1");
        var test2mean = getRadioCheckedValue(7, "test2_item2");
        var test2truth = getRadioCheckedValue(7, "test2_item3");            
    } else if (order == 2) {
        var test2nice = getRadioCheckedValue(7, "test2_item3");
        var test2mean = getRadioCheckedValue(7, "test2_item2");
        var test2truth = getRadioCheckedValue(7, "test2_item1");        
    }
        
experiment.data.trial2_nice.push(test2nice);  
experiment.data.trial2_mean.push(test2mean);  
experiment.data.trial2_truth.push(test2truth);  
     
       showSlide('slide011');
       var image011_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.011.jpeg" alt="slides/' + cond + order + '.011.jpeg" /></td></tr></table>'
			$("#image011").html(image011_html); //insert dynamically-built html code into html file; 
            $("#compare1").html("Who do you want to play with more?"); // FIXME: counterbalance niceness, meanness and truth-telling
            $("#speaker1_1").html(speakers[0]);
            $("#speaker1_2").html(speakers[1]);
    },
    
        end: function () {
        if (getRadioCheckedValue(8, "compare1judgment") == "1") {
            var compare = speaker_types[0];                
            } else if (getRadioCheckedValue(8, "compare1judgment") == "2") {
            var compare = speaker_types[1];                
            }
        var compare_why = document.getElementById("12_why").value;

experiment.data.trial1_2_play.push(compare);  
experiment.data.trial1_2_playWhy.push(compare_why);  
        
         showSlide("finished");
        setTimeout(function () {

            //Decrement  		
            var xmlHttp = null;
            xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
            xmlHttp.send(null);

            turk.submit(experiment.data);
        }, 1500); //function() - anonymous function
    },
}

