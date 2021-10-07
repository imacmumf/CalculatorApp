// $("document").ready(function(){
//   $("h1").addClass();

// });

let equation = [];

// $("button").click(function(){
//   const audio = new Audio ("beep1.wav");
//   audio.play();
// });

$(".numbers").click(function () {
  equation.push(this.value);
  $("textarea").text(equation.join(" "));
  const audio = new Audio("./sounds/beep2.wav");
  audio.play();
});

$(".add").click(function () {
  equation.push(" + ");
  $("textarea").text(equation.join(" "));
  const audio = new Audio("./sounds/beep1.wav");
  audio.play();
});

$(".subtract").click(function () {
  equation.push(" - ");
  $("textarea").text(equation.join(" "));
  const audio = new Audio("./sounds/beep1.wav");
  audio.play();
});

$(".divide").click(function () {
  equation.push(" / ");
  $("textarea").text(equation.join(" "));
  const audio = new Audio("./sounds/beep3.wav");
  audio.play();
});

$(".multiply").click(function () {
  equation.push(" * ");
  $("textarea").text(equation.join(" "));
  const audio = new Audio("./sounds/beep3.wav");
  audio.play();
});

$(".clear").click(function () {
  equation = [];
  $("textarea").text(equation);
  const audio = new Audio("./sounds/laser1.wav");
  audio.play();
});

$(".submit").click(function () {
  const loading = new Audio("./sounds/loading.wav");
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
