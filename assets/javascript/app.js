var modalContent=
  [{"h1":"PolitiPurple",
    "h2":"Front and Back End Development with Team of Four.",
    "img":"../images/news.png",
    "p":"Our Team wanted to build an app to make readers think about their news sources. A user can pick term and one of 12 sources. The app will search news from the last 30 days and return most relevant story from user's source and a source with an opposite lean. The sources have been paired based on Media Bias Chart. The app also shows readers how many likes the article received (Note: webhose api was used for likes and has a limited amount of hits).",
    "a":"https://kaybutswag.github.io/updatedPolitiPurple/"
  },{"h1":"PolitiPurple",
    "h2":"Front and Back End Development with Team of Four.",
    "img":"../images/news.png",
    "p":"Our Team wanted to build an app to make readers think about their news sources. A user can pick term and one of 12 sources. The app will search news from the last 30 days and return most relevant story from user's source and a source with an opposite lean. The sources have been paired based on Media Bias Chart. The app also shows readers how many likes the article received (Note: webhose api was used for likes and has a limited amount of hits).",
    "a":"https://kaybutswag.github.io/updatedPolitiPurple/"}
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

$(document).on("click", "#toggle1", function() {
        $(".flip-container1").flip('toggle');
    });


$('.flip-container2').flip({
  trigger: "manual"
});

$(document).on("click", "#toggle2", function() {
        $(".flip-container2").flip('toggle');
    });


$('.flip-container3').flip({
  trigger: "manual"
});

$(document).on("click", "#toggle3", function() {
        $(".flip-container3").flip('toggle');
    });

$('.flip-container4').flip({
  trigger: "manual"
});

$(document).on("click", "#toggle4", function() {
        $(".flip-container4").flip('toggle');
    });


$('.flip-container5').flip({
  trigger: "manual"
});

$(document).on("click", "#toggle5", function() {
        $(".flip-container5").flip('toggle');
    });


$('.flip-container6').flip({
  trigger: "manual"
});

$(document).on("click", "#toggle6", function() {
        $(".flip-container6").flip('toggle');
    });

$('.flip-container7').flip({
  trigger: "manual"
});

$(document).on("click", "#toggle7", function() {
        $(".flip-container7").flip('toggle');
    });

$('.flip-container8').flip({
  trigger: "manual"
});

$(document).on("click", "#toggle8", function() {
        $(".flip-container8").flip('toggle');
    });
//modal controls

$(".preview").on("click", function() {
    $("#myModal").css("display","block");
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
  
}


});

