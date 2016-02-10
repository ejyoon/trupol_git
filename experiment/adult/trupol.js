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
var cond = random(2)+1; // (1-6) For testing only (before running actual)


// ---------------- CONTROL FLOW ------------------
//PRE-LOAD IMAGES
// By creating image object and setting source, images preload
var images = new Array() 
for (i=0;i<25;i++) {//loop through images you want to use
    images[i] = new Image()
    images[i].src =  "slides/expt1.0" + i + ".jpeg"
    images[i].src =  "slides/expt1.00" + i + ".jpeg"
    images[i] = new Image()
    images[i].src =  "slides/cont1.0" + i + ".jpeg"
    images[i].src =  "slides/cont1.00" + i + ".jpeg"

} 


showSlide("instructions");

// MAIN EXPERIMENT
var experiment = { // end, next, select
    
    data:{
    site: "US", //fixme for other sites
    experiment: "trupol",
    cond: "FIXME", // randomize exp and cont
    order: "FIXME", // randomize 1 and 2
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
    trial1_2_play: [],   
    },
    
  instructions:function() {
    showSlide('instructions2')
  },

    
    slide001: function() {
        showSlide('slide001');
    
        var image001_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/expt1.001.jpeg" alt="slides/expt1.001.jpeg" /></td></tr></table>'
			$("#image001").html(image001_html); //insert dynamically-built html code into html file; 

    },
    
    slide002: function() {
        showSlide('slide002');
    
        var image002_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/expt1.002.jpeg" alt="slides/expt1.002.jpeg" /></td></tr></table>'
			$("#image002").html(image002_html); //insert dynamically-built html code into html file; 

    },
    
    slide003: function() {
        showSlide('slide003');
    
        var image003_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/expt1.003.jpeg" alt="slides/expt1.003.jpeg" /></td></tr></table>'
        $("#image003").html(image003_html); //insert dynamically-built html code into html file; 
        $("#comp_check1").html("Did Sally like the cookie?"); // FIXME: Sally and cookie as variables so that they can change depending on condition
    },
    
    slide004: function() {
        var comp_check1 = getRadioCheckedValue(0, "cc1judgment");
        experiment.data.trial1_comp_like.push(comp_check1);
        showSlide('slide004');
        var image004_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/expt1.004.jpeg" alt="slides/expt1.004.jpeg" /></td></tr></table>'
			$("#image004").html(image004_html); //insert dynamically-built html code into html file; 
            $("#comp_check2").html("What did Sally say to Edward?"); // FIXME: Sally and cookie as variables so that they can change depending on condition

    },
    
    slide005: function() {
//      var comp_check1 = getRadioCheckedValue(1, "cc1judgment");
//        if(comp_check1 == 1) {         $("#message_error").html('<font color="red">Your answer is incorrect! Try again.</font>');        
//} else if(comp_check1 == 0) {
//    showSlide("slide004")
//};
        var comp_check2 = getRadioCheckedValue(1, "cc2judgment");
        experiment.data.trial1_comp_tell.push(comp_check2);
        showSlide('slide005');
        var image005_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/expt1.005.jpeg" alt="slides/expt1.005.jpeg" /></td></tr></table>'
			$("#image005").html(image005_html); //insert dynamically-built html code into html file; 
            $("#pretest1").html("Why did Sally say that to Edward?"); // FIXME
            $("#pretest2").html("How did Edward feel?"); // FIXME
            $("#test1").html("Was Sally nice?"); // FIXME: counterbalance niceness, meanness and truth-telling
            $("#test2").html("Was Sally mean?"); // FIXME: counterbalance niceness, meanness and truth-telling
            $("#test3").html("Was Sally telling the truth?"); // FIXME: counterbalance niceness, meanness and truth-telling

    },

    slide011: function() {
//      var comp_check1 = getRadioCheckedValue(1, "cc1judgment");
//        if(comp_check1 == 1) {         $("#message_error").html('<font color="red">Your answer is incorrect! Try again.</font>');        
//} else if(comp_check1 == 0) {
//    showSlide("slide004")
//};
        showSlide('slide011');
        var image011_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/expt1.011.jpeg" alt="slides/expt1.011.jpeg" /></td></tr></table>'
			$("#image011").html(image011_html); //insert dynamically-built html code into html file; 
            $("#compare1").html("Who do you want to play with more?"); // FIXME: counterbalance niceness, meanness and truth-telling
    },

//    if (document.getElementById('item_0').checked || document.getElementById('item_1').checked || document.getElementById('item_2').checked) {    
//    setTimeout(experiment.end, 500);
//
//   } else {
//     $("#messagesum").html('<font color="red">Please select an object!</font>');
//   }
//    },
    
        end: function () {
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

