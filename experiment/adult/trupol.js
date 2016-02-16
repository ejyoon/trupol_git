// trupol adult experiment
// Overview: (i) Helper (ii) Parameters (iii) Control Flow

// ---------------- HELPER ------------------

function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

//array shuffle function
shuffle = function (o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
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
var filename = "EJY_trupol"
var condCounts = "1,20;2,20;" // FIXME
var xmlHttp = null;
xmlHttp = new XMLHttpRequest(); 
xmlHttp.open( "GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + condCounts + "&filename=" + filename, false );
xmlHttp.send( null );
//var cond = xmlHttp.responseText; // For actual experimental runs
var list = random(4)+1; // For testing only FIXME
//var list = 3;

// ---------------- CONTROL FLOW ------------------
//PRE-LOAD IMAGES
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
for (i=1;i<9;i++) {
    images[i] = new Image()
    images[i].src =  "slides/"  + cond + order +  ".0" + i + ".jpeg"
    images[i].src =  "slides/"  + cond + order +  ".00" + i + ".jpeg"
    images[i] = new Image()
    images[i].src =  "slides/"  + cond + order +  ".0" + i + ".jpeg"
    images[i].src =  "slides/"  + cond + order +  ".00" + i + ".jpeg"

} 
for (i=10;i<25;i++) {
    images[i] = new Image()
    images[i].src =  "slides/"  + cond + order + ".0" + i + ".jpeg"
    images[i] = new Image()
    images[i].src =  "slides/" + cond + order + ".0" + i + ".jpeg"
} 


showSlide("instructions");

// MAIN EXPERIMENT
var experiment = {
    
    data:{
    site: "US", //fixme for other sites
    experiment: "trupol",
    list: list,
    cond: cond,
    order: order,
    age: "adult",
    language: [],
    expt_aim: [],
    expt_gen: [],
    practice1_nice: [],
    practice1_mean: [],
    practice2_nice: [],
    practice2_mean: [],
    practice3_truth: [],
    practice4_truth: [],
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
    trial3_comp_like: [],
    trial3_comp_tell: [],
    trial3_SWhy: [],
    trial3_LFeel: [],
    trial3_nice: [],
    trial3_mean: [],
    trial3_truth: [],
    trial4_comp_like: [],
    trial4_comp_tell: [],
    trial4_SWhy: [],
    trial4_LFeel: [],
    trial4_nice: [],
    trial4_mean: [],
    trial4_truth: [],
    trial3_4_play: [],   
    trial3_4_playWhy: [],   
    },
    
  instructions:function() {
    showSlide('instructions2')
  },

    practice: function () {
        
    showSlide('practice')        
    },
    
//////////// SPEAKER 1 //////////
    
    slide001: function() {
        var practice1_nice = getRadioCheckedValue(0, "practice1_nice");
        var practice1_mean = getRadioCheckedValue(0, "practice1_mean");
        var practice2_nice = getRadioCheckedValue(0, "practice2_nice");
        var practice2_mean = getRadioCheckedValue(0, "practice2_mean");
        var practice3_truth = getRadioCheckedValue(0, "practice3_truth");            
        var practice4_truth = getRadioCheckedValue(0, "practice4_truth");            

        experiment.data.practice1_nice.push(practice1_nice);  
        experiment.data.practice1_mean.push(practice1_mean);  
        experiment.data.practice2_nice.push(practice2_nice);  
        experiment.data.practice2_mean.push(practice2_mean);  
        experiment.data.practice3_truth.push(practice3_truth);  
        experiment.data.practice4_truth.push(practice4_truth);  

        showSlide('slide001');
    
        var image001_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.001.jpeg" alt="slides/' + cond + order + '.001.jpeg" /></td></tr></table>'
			$("#image001").html(image001_html);

    },
    
    slide002: function() {
        showSlide('slide002');
    
        var image002_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.002.jpeg" alt="slides/' + cond + order + '.002.jpeg" /></td></tr></table>'
			$("#image002").html(image002_html);

    },
    
    slide003: function() {
        showSlide('slide003');
    
        var image003_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.003.jpeg" alt="slides/' + cond + order + '.003.jpeg" /></td></tr></table>'
        $("#image003").html(image003_html);
        $("#comp_check1_1").html("Did " + speakers[0] + " like the " + item[0] + "?"); 
    },
    
    slide004: function() {
        var comp_check1 = getRadioCheckedValue(1, "cc1_1judgment");
        experiment.data.trial1_comp_like.push(comp_check1);
        showSlide('slide004');
        var image004_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.004.jpeg" alt="slides/' + cond + order + '.004.jpeg" /></td></tr></table>'
			$("#image004").html(image004_html); 
            $("#comp_check1_2").html(speakers[0] +  " said to " + listeners[0] + " that the " + item[0] + " was:"); 
            $("#comp_check1_2_adj1").html(evaluation[1])
            $("#comp_check1_2_adj2").html(evaluation[0])
    },
    
    slide005: function() {
        var comp_check2 = getRadioCheckedValue(2, "cc1_2judgment");
        experiment.data.trial1_comp_tell.push(comp_check2);
        showSlide('slide005');
        var image005_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.005.jpeg" alt="slides/' + cond + order + '.005.jpeg" /></td></tr></table>'
			$("#image005").html(image005_html);
            $("#pretest1_1").html("Why did "  + speakers[0] +  " say that to " + listeners[0] + "?"); // FIXME
            $("#pretest1_2").html("How did " + listeners[0] + " feel?"); 
            $("#test1_1").html("Was "  + speakers[0] +  " " + goals[0] + "?");
            $("#test1_2").html("Was "  + speakers[0] +  " " + goals[1] + "?"); 
            $("#test1_3").html("Was "  + speakers[0] +  " " + goals[2] + "?");

    },

//////////// SPEAKER 2 //////////
    slide006: function() {
        experiment.data.trial1_SWhy.push(document.getElementById("pretest1_1answer").value);  
experiment.data.trial1_LFeel.push(document.getElementById("pretest1_2answer").value);           
    if(order == 1) {
        var test1nice = getRadioCheckedValue(4, "test1_item1");
        var test1mean = getRadioCheckedValue(4, "test1_item2");
        var test1truth = getRadioCheckedValue(4, "test1_item3");            
    } else if (order == 2) {
        var test1nice = getRadioCheckedValue(4, "test1_item3");
        var test1mean = getRadioCheckedValue(4, "test1_item2");
        var test1truth = getRadioCheckedValue(4, "test1_item1");        
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
        var comp_check1 = getRadioCheckedValue(5, "cc2_1judgment");
        experiment.data.trial2_comp_like.push(comp_check1);
        showSlide('slide009');
        var image009_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.009.jpeg" alt="slides/' + cond + order + '.009.jpeg" /></td></tr></table>'
			$("#image009").html(image009_html);
            $("#comp_check2_2").html(speakers[1] +  " said to " + listeners[0] + " that the " + item[0] + " was:");
            $("#comp_check2_2_adj1").html(evaluation[0])
            $("#comp_check2_2_adj2").html(evaluation[1])
    },
    
    slide010: function() {
        var comp_check2 = getRadioCheckedValue(6, "cc2_2judgment");
        experiment.data.trial2_comp_tell.push(comp_check2);
        showSlide('slide010');
        var image010_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.010.jpeg" alt="slides/' + cond + order + '.010.jpeg" /></td></tr></table>'
			$("#image010").html(image010_html); 
            $("#pretest2_1").html("Why did "  + speakers[1] +  " say that to " + listeners[0] + "?");
            $("#pretest2_2").html("How did " + listeners[0] + " feel?");
            $("#test2_1").html("Was "  + speakers[1] +  " " + goals[0] + "?");
            $("#test2_2").html("Was "  + speakers[1] +  " " + goals[1] + "?");
            $("#test2_3").html("Was "  + speakers[1] +  " " + goals[2] + "?");

    },
    
//////////// SPEAKER 1+2 comparison //////////
    
    slide011: function() {        experiment.data.trial2_SWhy.push(document.getElementById("pretest2_1answer").value);  
experiment.data.trial2_LFeel.push(document.getElementById("pretest2_2answer").value);  
    if(order == 1) {
        var test2nice = getRadioCheckedValue(8, "test2_item1");
        var test2mean = getRadioCheckedValue(8, "test2_item2");
        var test2truth = getRadioCheckedValue(8, "test2_item3");            
    } else if (order == 2) {
        var test2nice = getRadioCheckedValue(8, "test2_item3");
        var test2mean = getRadioCheckedValue(8, "test2_item2");
        var test2truth = getRadioCheckedValue(8, "test2_item1");        
    }
        
experiment.data.trial2_nice.push(test2nice);  
experiment.data.trial2_mean.push(test2mean);  
experiment.data.trial2_truth.push(test2truth);  
     
       showSlide('slide011');
       var image011_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.011.jpeg" alt="slides/' + cond + order + '.011.jpeg" /></td></tr></table>'
			$("#image011").html(image011_html); 
            $("#compare1").html("Who do you want to play with more?"); 
            $("#speaker1_1").html(speakers[0]);
            $("#speaker1_2").html(speakers[1]);
    },
    
//////////// in-between //////////

    
    slide012: function () {
        if (getRadioCheckedValue(9, "compare1judgment") == "1") {
            var compare = speaker_types[0];                
            } else if (getRadioCheckedValue(9, "compare1judgment") == "2") {
            var compare = speaker_types[1];                
            }
        var compare_why = document.getElementById("12_why").value;

experiment.data.trial1_2_play.push(compare);  
experiment.data.trial1_2_playWhy.push(compare_why);  

            showSlide('slide012');
       
            var image012_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.012.jpeg" alt="slides/' + cond + order + '.012.jpeg" /></td></tr></table>'
			$("#image012").html(image012_html);
    },
    
//////////// SPEAKER 3 //////////
    
    slide013: function() {
        showSlide('slide013');
    
        var image013_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.013.jpeg" alt="slides/' + cond + order + '.013.jpeg" /></td></tr></table>'
			$("#image013").html(image013_html);

    },
    
    slide014: function() {
        showSlide('slide014');
    
        var image014_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.014.jpeg" alt="slides/' + cond + order + '.014.jpeg" /></td></tr></table>'
			$("#image014").html(image014_html);

    },
    
    slide015: function() {
        showSlide('slide015');
    
        var image015_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.015.jpeg" alt="slides/' + cond + order + '.015.jpeg" /></td></tr></table>'
        $("#image015").html(image015_html);
        $("#comp_check3_1").html("Did " + speakers[2] + " like the " + item[1] + "?"); 
    },
    
    slide016: function() {
        var comp_check1 = getRadioCheckedValue(11, "cc3_1judgment");
        experiment.data.trial3_comp_like.push(comp_check1);
        showSlide('slide016');
        var image016_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.016.jpeg" alt="slides/' + cond + order + '.016.jpeg" /></td></tr></table>'
			$("#image016").html(image016_html); 
            $("#comp_check3_2").html(speakers[2] +  " said to " + listeners[1] + " that the " + item[1] + " was:"); 
            $("#comp_check3_2_adj1").html(evaluation[3])
            $("#comp_check3_2_adj2").html(evaluation[2])
    },
    
    slide017: function() {
        var comp_check2 = getRadioCheckedValue(12, "cc3_2judgment");
        experiment.data.trial3_comp_tell.push(comp_check2);
        showSlide('slide017');
        var image017_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.017.jpeg" alt="slides/' + cond + order + '.017.jpeg" /></td></tr></table>'
			$("#image017").html(image017_html);
            $("#pretest3_1").html("Why did "  + speakers[2] +  " say that to " + listeners[1] + "?");
            $("#pretest3_2").html("How did " + listeners[1] + " feel?"); 
            $("#test3_1").html("Was "  + speakers[2] +  " " + goals[0] + "?");
            $("#test3_2").html("Was "  + speakers[2] +  " " + goals[1] + "?"); 
            $("#test3_3").html("Was "  + speakers[2] +  " " + goals[2] + "?");

    },

//////////// SPEAKER 4 //////////
    slide018: function() {
        experiment.data.trial3_SWhy.push(document.getElementById("pretest3_1answer").value);  
experiment.data.trial3_LFeel.push(document.getElementById("pretest3_2answer").value);           
    if(order == 1) {
        var test3nice = getRadioCheckedValue(14, "test3_item1");
        var test3mean = getRadioCheckedValue(14, "test3_item2");
        var test3truth = getRadioCheckedValue(14, "test3_item3");            
    } else if (order == 2) {
        var test3nice = getRadioCheckedValue(14, "test3_item3");
        var test3mean = getRadioCheckedValue(14, "test3_item2");
        var test3truth = getRadioCheckedValue(14, "test3_item1");        
    }
        
experiment.data.trial3_nice.push(test3nice);  
experiment.data.trial3_mean.push(test3mean);  
experiment.data.trial3_truth.push(test3truth);  
     
        
        showSlide('slide018');    
        var image018_html = 
            '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.018.jpeg" alt="slides/' + cond + order + '.018.jpeg" /></td></tr></table>'
			$("#image018").html(image018_html); 
    },
    
    slide019: function() {
        showSlide('slide019');
        var image019_html = 
            '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.019.jpeg" alt="slides/' + cond + order + '.019.jpeg" /></td></tr></table>'
			$("#image019").html(image019_html);
    },
    
    slide020: function() {
        showSlide('slide020');    
        var image020_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.020.jpeg" alt="slides/' + cond + order + '.020.jpeg" /></td></tr></table>'
        $("#image020").html(image020_html);
        $("#comp_check4_1").html("Did " + speakers[3] + " like the " + item[1] + "?");
    },
    
    slide021: function() {
        var comp_check1 = getRadioCheckedValue(15, "cc4_1judgment");
        experiment.data.trial4_comp_like.push(comp_check1);
        showSlide('slide021');
        var image021_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.021.jpeg" alt="slides/' + cond + order + '.021.jpeg" /></td></tr></table>'
			$("#image021").html(image021_html);
            $("#comp_check4_2").html(speakers[3] +  " said to " + listeners[1] + " that the " + item[1] + " was:");
            $("#comp_check4_2_adj1").html(evaluation[2])
            $("#comp_check4_2_adj2").html(evaluation[3])
    },
    
    slide022: function() {
        var comp_check2 = getRadioCheckedValue(16, "cc4_2judgment");
        experiment.data.trial4_comp_tell.push(comp_check2);
        showSlide('slide022');
        var image022_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.022.jpeg" alt="slides/' + cond + order + '.022.jpeg" /></td></tr></table>'
			$("#image022").html(image022_html); 
            $("#pretest4_1").html("Why did "  + speakers[3] +  " say that to " + listeners[1] + "?");
            $("#pretest4_2").html("How did " + listeners[1] + " feel?");
            $("#test4_1").html("Was "  + speakers[3] +  " " + goals[0] + "?");
            $("#test4_2").html("Was "  + speakers[3] +  " " + goals[1] + "?");
            $("#test4_3").html("Was "  + speakers[3] +  " " + goals[2] + "?");

    },
    
//////////// SPEAKER 3+4 comparison //////////
    
    slide023: function() {        experiment.data.trial4_SWhy.push(document.getElementById("pretest4_1answer").value);  
experiment.data.trial4_LFeel.push(document.getElementById("pretest4_2answer").value);  
    if(order == 1) {
        var test4nice = getRadioCheckedValue(18, "test4_item1");
        var test4mean = getRadioCheckedValue(18, "test4_item2");
        var test4truth = getRadioCheckedValue(18, "test4_item3");            
    } else if (order == 2) {
        var test4nice = getRadioCheckedValue(18, "test4_item3");
        var test4mean = getRadioCheckedValue(18, "test4_item2");
        var test4truth = getRadioCheckedValue(18, "test4_item1");        
    }
        
experiment.data.trial4_nice.push(test4nice);  
experiment.data.trial4_mean.push(test4mean);  
experiment.data.trial4_truth.push(test4truth);  
     
       showSlide('slide023');
       var image023_html = '<table align="center"><tr><td align="center"><img style="display:block;" width=512 height=384 src="slides/' + cond + order + '.023.jpeg" alt="slides/' + cond + order + '.023.jpeg" /></td></tr></table>'
			$("#image023").html(image023_html); 
            $("#compare2").html("Who do you want to play with more?"); 
            $("#speaker2_1").html(speakers[2]);
            $("#speaker2_2").html(speakers[3]);
    },
    
    askinfo: function() {
        if (getRadioCheckedValue(19, "compare2judgment") == "1") {
            var compare = speaker_types[2];                
            } else if (getRadioCheckedValue(19, "compare2judgment") == "2") {
            var compare = speaker_types[3];                
            }
        var compare_why = document.getElementById("34_why").value;

experiment.data.trial3_4_play.push(compare);  
experiment.data.trial3_4_playWhy.push(compare_why);  
        showSlide("askInfo");
    },
    
        end: function () {
experiment.data.language.push(document.getElementById("homelang").value);	experiment.data.expt_aim.push(document.getElementById("expthoughts").value);		experiment.data.expt_gen.push(document.getElementById("expcomments").value);

            
        showSlide("finished");
        setTimeout(function () {

            //Decrement  		
            var xmlHttp = null;
            xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
            xmlHttp.send(null);

            turk.submit(experiment.data);
        }, 1500);
    },
}

