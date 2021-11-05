// function myfunction(){
//   document.getElementById("demo").innerText="no"
// }

var input;
var button;
var output;
document.addEventListener("DOMContentLoaded", function()){
  input = document.getElementbyId("fortune-input");
  button = document.getElementbyId("fortune-buttont");
  output = document.getElementbyId("fortune-output");

  button.addEventListener("click",function(){
    outputFunction(output);
  })
}

var array =["Something extremely nice will happen if you turn right every time",
"There will be a surprise if you call your mom tonight at 8",
"Your crush is also into you",
"Cut yout hair for your uncle, and you'll receive a gift within 5 years",
"You'll be late for your work if you miss train",
"Grow old or die young"]


function outputFunction(myString){
  input = inputElement.value;
  output = input + array[Math.random()*6]


}
