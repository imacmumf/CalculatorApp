// $("document").ready(function(){
//   $("h1").addClass();

// });

let equation = [];
const beep1 = new Audio("./sounds/beep1.wav");
const beep2 = new Audio("./sounds/beep2.wav");
const beep3 = new Audio("./sounds/beep3.wav");
const laser1 = new Audio("./sounds/laser1.wav");
const loading = new Audio("./sounds/loading.wav");



$(".numbers").click(function () {
  equation.push(this.value);
  $("textarea").text(equation.join(" "));
  beep2.play();
});

$(".add").click(function () {
  equation.push(" + ");
  $("textarea").text(equation.join(" "));
  beep1.play();
});

$(".subtract").click(function () {
  equation.push(" - ");
  $("textarea").text(equation.join(" "));
  beep1.play();
});

$(".divide").click(function () {
  equation.push(" / ");
  $("textarea").text(equation.join(" "));
  beep3.play();
});

$(".multiply").click(function () {
  equation.push(" * ");
  $("textarea").text(equation.join(" "));
  beep3.play();
});

$(".clear").click(function () {
  equation = [];
  $("textarea").text(equation);
  laser1.play();
});

$(".submit").click(function () {
  
  loading.play();
  let x = eval(equation.join(""));

  // add pulsing load class
  $("textarea").addClass("loadPulsate");

  // Remove class after set time
  setTimeout(function(){
    $("textarea").removeClass("loadPulsate");
  }, 2000);
  
  

  setTimeout(function () {
    $("textarea").text(x);
  }, 2000);
});
