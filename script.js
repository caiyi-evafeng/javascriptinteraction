// function myfunction(){
//   document.getElementById("demo").innerText="no"
// }

var input;
var button;
var output;
document.addEventListener("DOMContentLoaded", function(){
  input = document.getElementById("fortune-input");
  button = document.getElementById("fortune-button");
  output = document.getElementById("fortune-output");

  button.addEventListener("click",function(){
    outputFunction();
    textStyle();
  });


});




var array =["Something extremely nice will happen if you turn right every time",
"There will be a surprise if you call your mom tonight at 8",
"Your crush is also into you",
"Cut yout hair for your uncle, and you'll receive a gift within 5 years",
"You'll be late for your work if you miss train",
"Grow old or die young"];


function outputFunction(){
  var theUserInput = input.value;
  output.innerText = theUserInput +": "+ array[Math.floor(Math.random()*array.length)];

}

function textStyle(){
  output.style.color = "rgb("+ Math.random()*255+ ","+ Math.random()*255 +","+ Math.random()*255+")";
  output.style.fontSize = Math.random()*20+10+"px";
  output.style.transform = "rotate("+Math.random()*20+"deg)";

}
