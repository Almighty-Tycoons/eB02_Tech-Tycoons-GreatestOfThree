function showCode() {
  document.getElementById('Swap').className = 'show, codeLayout';
}

function changeClass(id, className) {
  document.getElementById(id).className = className;
}

function displayElements() {
  var a = document.getElementById('inputV1').value.trim();
  var b = document.getElementById('inputV2').value.trim();
  var c = document.getElementById('inputV3').value.trim();
  if (window.innerWidth >= 801) {
    if (a == "" || b == "" || c == "") {
      // location.reload();
      // alert("Please provide inputs");
      $(".validation").html("Please provide inputs");
      return;
    }
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (isNaN(a) || isNaN(b) || isNaN(c)){
      // alert("Please provide numbers only.");
      // location.reload();
      $(".validation").html("Please provide numbers only.");
      return;
    }

    if (a == b == c || a == b || b == c || c == a) {
      // location.reload();
      // alert("Please provide diffrent number for comparison");
      $(".validation").html("Please provide diffrent number for comparison");
      return;
    }
    if (!Number.isInteger(a)) {
      document.getElementById("0").innerHTML = "float";
    }
    if (!Number.isInteger(b)) {
      document.getElementById("1").innerHTML = "float";
    }
    if (!Number.isInteger(c)) {
      document.getElementById("2").innerHTML = "float";
    }
  }

  if (window.innerWidth <= 800) {
    var a = document.getElementById('inputV4').value.trim();
    var b = document.getElementById('inputV5').value.trim();
    var c = document.getElementById('inputV6').value.trim();
    if (a == "" || b == "" || c == "") {
      // location.reload();
      // alert("Please provide inputs");
      $(".validation").html("Please provide inputs");
      return;
    }

    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (isNaN(a) || isNaN(b) || isNaN(c)){
      // alert("Please provide numbers only.");
      // location.reload();
      $(".validation").html("Please provide numbers only.");
      return;
    }
    if (a == b == c || a == b || b == c || c == a) {
      // location.reload();
      // alert("Please provide diffrent number for comparison");
      $(".validation").html("Please provide diffrent number for comparison");
      return;
    }
    if (!Number.isInteger(a)) {
      document.getElementById("0").innerHTML = "float";
    }
    if (!Number.isInteger(b)) {
      document.getElementById("1").innerHTML = "float";
    }
    if (!Number.isInteger(c)) {
      document.getElementById("2").innerHTML = "float";
    }
  }
  $(".validation").hide();
  showCode();
  var c = "line"
  changeClass(c + "1", 'showDivInRed code-text');
  changeClass('next', 'show button-style');
  changeClass('next1', 'show button-style bottom-button');
}

function createBoxes() {

  changeClass('resultDisplay', 'resultDisplay');

}

var d = 1;
var finished = false;
var reload = false;

function Execution() {
  document.getElementById("btnOk").hidden = true;
  if (reload) {
    location.reload();
  }


  if (window.innerWidth >= 801) {
    var a = Number(document.getElementById('inputV1').value);
    var b = Number(document.getElementById('inputV2').value);
    var c = Number(document.getElementById('inputV3').value);
  } else {
    var a = Number(document.getElementById('inputV4').value);
    var b = Number(document.getElementById('inputV5').value);
    var c = Number(document.getElementById('inputV6').value);
  }
  if (finished) {
    $(".original-container").addClass("display-off");
    $(".out-box").addClass("display-off");
    $(".symbol").addClass("display-off");
    $("#out-box").addClass("expand");
    if (c > a && c > b) {
      document.getElementById('A').innerHTML = "" + c;
    }
    if (b > a && b > c) {
      document.getElementById("info").innerHTML = "num2 is the greatest number";
    }
    reload = true;
    return;
  }

  changeClass("line" + d, "line code-text");
  d = d + 1;
  changeClass("line" + d, 'showDivInRed code-text');

  if (d == 3) {

    document.getElementById('A').innerHTML = "" + a;
    document.getElementById('B').innerHTML = "" + b;
    document.getElementById('C').innerHTML = "" + a;
    document.getElementById('D').innerHTML = "" + c;
    document.getElementById("symbol1").innerHTML = ">";
    document.getElementById("symbol2").innerHTML = ">";
    document.getElementById("symbol1").style.color = "green";
    document.getElementById("symbol2").style.color = "green";
    if (a < b) {
      document.getElementById("symbol1").style.color = "red";
      d = d + 1;
      document.getElementById("info").innerHTML = "num1 is smaller than num2";
      if (a <= c) {
        document.getElementById("symbol2").style.color = "red";
      }
      return;
    }
    if (a < c) {
      document.getElementById("symbol2").style.color = "red";
      d = d + 1;
      document.getElementById("info").innerHTML = "num1 is smaller than num3";
      return;
    }
    document.getElementById("info").innerHTML = "num1 is greter than num2 and num3";
    finished = true;
    return;
  }
  if (d == 5) {
    changeClass("line3", "line code-text");
    document.getElementById('A').innerHTML = "" + b;
    document.getElementById('B').innerHTML = "" + c;
    document.getElementById('C').innerHTML = "" + b;
    document.getElementById('D').innerHTML = "" + c;
    if (b < a) {
      document.getElementById("symbol1").style.color = "red";
      d = d + 1;
      document.getElementById("info").innerHTML = "num2 is smaller than num1";
      return;
    }
    if (b < c) {
      document.getElementById("symbol2").style.color = "red";
      d = d + 1;
      document.getElementById("info").innerHTML = "num2 is smaller than num 3";
      return;
    }
    document.getElementById("symbol1").style.color = "green";
    document.getElementById("symbol2").style.color = "green";
    finished = true;
  }

  if (d == 7) {
    changeClass("line5", "line code-text");
    if (c > a && c > b) {
      document.getElementById("info").innerHTML = "num3 is the largest number";
      finished = true;
    }
  }

}
