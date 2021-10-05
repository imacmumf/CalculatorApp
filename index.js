// $(document).ready(function(){
//     $("textarea").text("Answer");

// });

// $("document").ready(function(){
//   $("h1").addClass();

// });


let equation = [];


$(".numbers").click(function () {
  equation.push(this.value);
  $("textarea").text(equation.join(' '));
  
});


$(".add").click(function () {
  equation.push(" + ");
  $("textarea").text(equation.join(' '));
  
});

$(".subtract").click(function () {
  equation.push(" - ");
  $("textarea").text(equation.join(' '));
  
});

$(".divide").click(function () {
  equation.push(" / ");
  $("textarea").text(equation.join(' '));
  
});


$(".multiply").click(function () {
  equation.push(" * ");
  $("textarea").text(equation.join(' '));
  
});

$(".clear").click(function () {
  equation = [];
  $("textarea").text(equation);
});


$(".submit").click(function () {
  let x = eval(equation.join(' '));
  $("textarea").text(x);

});