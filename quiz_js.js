$(document).ready(function() {

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
        myFunction();
    };

    // Get the navbar
    var navbar = document.getElementById("nav-bar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
});





$(".restlt").hide();
$("#try-btn").hide();



var checked = [];
$('input').change(function() {
    if (this.checked) {
        var response = $('label[for="' + this.id + '"]');
        //console.log(response);
        checked.push(response);
    }
});


function check() {
    var count = 0;
    var q1 = document.quiz.ques1.value;
    var q2 = document.quiz.ques2.value;
    var q3 = document.quiz.ques3.value;
    var q4 = document.quiz.ques4.value;
    var q5 = document.quiz.ques5.value;
    if (q1 == "" || q2 == "" || q3 == "" || q4 == "" || q5 == "") {
        alert("Attempt all questions");
        return;
    }


    // console.log(document.quiz.ques1.value);
    if (q1 == "ternary") {
        count++;
    }

    if (q2 == "{ }") {
        count++;
    }
    if (q3 == "/* Comment */") {
        count++;
    }
    if (q4 == "==") {
        count++;
    }
    if (q5 == "if ( expression )") {
        count++;
    }


    var element1 = document.getElementById("a1");
    element1.classList.add("green");
    var element2 = document.getElementById("a2");
    element2.classList.add("green");
    var element3 = document.getElementById("a3");
    element3.classList.add("green");
    var element4 = document.getElementById("a4");
    element4.classList.add("green");
    var element5 = document.getElementById("a5");
    element5.classList.add("green");


    //console.log(checked);
    for (var i = 0; i < checked.length; i++) {
        console.log(checked[i].addClass("red"));
    }


    if (count === 5) {
        //alert("uytcuycutxs");
        document.getElementById("number-correct").innerHTML = "Your score = " + count + "   Conguratulations !";
        $(".restlt").show();

    } else {
      if (count=== 0) {
        document.getElementById("number-correct").innerHTML = "Your score = " + count ;
        $(".restlt").show();
        $("#try-btn").show();

      } else {

          document.getElementById("number-correct").innerHTML = "Your score = " + count + "   Keep It Up !";
          $(".restlt").show();
          $("#try-btn").show();
      }
    }
  $("#after-submit").hide();
    window.scrollTo(0, 500);

}
