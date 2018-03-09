var modalContent=
  [{"h2":"PolitiPurple",
    "h3":"Front End Developer on Four Member Team.",
    "img":"assets/images/news.png",
    "p":"Our team wanted to build an app to make readers think about their news sources. A user can search a term and select one of 12 sources. The app will search news from the last 30 days and return most relevant story from user's source and a source with an opposite lean. The sources have been paired based on <a target='_blank' href='http://www.allgeneralizationsarefalse.com/the-chart-version-3-0-what-exactly-are-we-reading/'>Media Bias Chart.</a> The app also shows readers how many likes the article received on Facebook (Note: Webhose API was used for likes and has a limited amount of hits).",
    "a":"https://kaybutswag.github.io/PolitiPurple/"
  },{"h2":"Mentor Match",
    "h3":"Personal Project: Full Stack",
    "img":"assets/images/mentor.png",
    "p":"The original objective was to match a user with friends. My mentor app stores user information and answers with local API. The user is then matched with a cast member of the West Wing. This app was deployed on Heroku and built with NPM Express Server.",
    "a":"https://enigmatic-lowlands-63180.herokuapp.com/"
  },{"h2":"Order Up!",
    "h3":"Personal Project: Full Stack",
    "img":"assets/images/burger.png",
    "p":"This app uses NPM mysql to keep track of orders and their status. User can also dynamically add orders, which will be stored server-side.",
    "a":"https://immense-mesa-59802.herokuapp.com/"
  },{"h2":"All Aboard!",
    "h3":"Personal Project: Full Stack",
    "img":"assets/images/train.png",
    "p":"This app uses firebase for server-side storage to keep track of trains as populated by user. It can calculate the time for the next train and how many minutes until that train.",
    "a":"https://kaybutswag.github.io/TrainScheduler/"
  },{"h2":"Kinnections",
    "h3":"Back-End Developer on Four Member Team",
    "img":"assets/images/LandingPageWhite_loginmoved copy.png",
    "p":"Our goal is to create an app that matches individuals looking for a work out buddy. Users can fill out their information, review potential matches, chat, and make plans!",
    "a":"#"
  },{"h2":"Snark-Off",
    "h3":"Personal Project",
    "img":"assets/images/snark.png",
    "p":"A pop culture take on a fighter game. Each character has individual health points that decrease as your fighter and adversary insult each other.",
    "a":"https://kaybutswag.github.io/week4Game/"
  },{"h2":"Citizenship Test",
    "h3":"Personal Project",
    "img":"assets/images/test.png",
    "p":"This quiz features questions from the actual United States Citizenship Test. The app has timers and keeps track of your score.",
    "a":"https://kaybutswag.github.io/TriviaGame/"
  },{"h2":"Wicked Hanged Man",
    "h3":"Personal Project",
    "img":"assets/images/hangman.png",
    "p":"Nicolas Cage's career has been in trouble. He doesn't know if he has any fans left. Prove you know his filmography and keep him from the gallows. (Graphic Images not included).",
    "a":"https://kaybutswag.github.io/Hangman-Game/"
  }

];


$(function() {
  $("#nav1 a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash);
  });

// card flips

$('.flip-container1').flip({
  trigger: "manual"
});

$(document).on("click", ".toggle1", function() {
        $(".flip-container1").flip('toggle');
    });


$('.flip-container2').flip({
  trigger: "manual"
});

$(document).on("click", ".toggle2", function() {
        $(".flip-container2").flip('toggle');
    });


$('.flip-container3').flip({
  trigger: "manual"
});

$(document).on("click", ".toggle3", function() {
        $(".flip-container3").flip('toggle');
    });

$('.flip-container4').flip({
  trigger: "manual"
});

$(document).on("click", ".toggle4", function() {
        $(".flip-container4").flip('toggle');
    });


$('.flip-container5').flip({
  trigger: "manual"
});

$(document).on("click", ".toggle5", function() {
        $(".flip-container5").flip('toggle');
    });


$('.flip-container6').flip({
  trigger: "manual"
});

$(document).on("click", ".toggle6", function() {
        $(".flip-container6").flip('toggle');
    });

$('.flip-container7').flip({
  trigger: "manual"
});

$(document).on("click", ".toggle7", function() {
        $(".flip-container7").flip('toggle');
    });

$('.flip-container8').flip({
  trigger: "manual"
});

$(document).on("click", ".toggle8", function() {
        $(".flip-container8").flip('toggle');
    });
//modal controls

$(".preview").on("click", function() {
    $("#myModal").css("display","block");
    var arraynum=parseInt(this.value);
    fillModal(arraynum);
});

$(".close").on("click", function() {
    $("#myModal").css("display","none");
});

var modal = document.getElementById('myModal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function fillModal(number){
  var myImg=$("<img>");
  myImg.attr({"src": modalContent[number].img,"alt":modalContent[number].h2});


  if(number===4){
    var myBlock=$("<div>")
  myBlock.append("<h2>"+modalContent[number].h2+"</h2><h3>"+modalContent[number].h3+"</h3><p>"+modalContent[number].p+"</p>"+
    "<a class='button' id='launchButton' type='submit' href="+modalContent[number].a+" target='_blank'>Coming Soon!</a>");
  }
  else{
  var myBlock=$("<div>")
  myBlock.append("<h2>"+modalContent[number].h2+"</h2><h3>"+modalContent[number].h3+"</h3><p>"+modalContent[number].p+"</p>"+
    "<a class='button' id='launchButton' type='submit' href="+modalContent[number].a+" target='_blank'>Launch Website</a>");
}



  $(".photodiv").html(myImg);
  $(".infodiv").html(myBlock);
  
}



});

