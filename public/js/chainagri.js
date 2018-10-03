var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var button = document.getElementById('btn');

increment.addEventListener("click",function(){
  button.textContent++;
});

decrement.addEventListener("click",function(){
  if(button.textContent!=0)
  {
  button.textContent--;
}
});


var increment1 = document.getElementById('increment1');
var decrement1 = document.getElementById('decrement1');
var button1 = document.getElementById('btn1');

increment1.addEventListener("click",function(){
  button1.textContent++;
});

decrement1.addEventListener("click",function(){
  if(button1.textContent!=0)
  {
  button1.textContent--;
}
});




var increment2 = document.getElementById('increment2');
var decrement2 = document.getElementById('decrement2');
var button2 = document.getElementById('btn2');



increment2.addEventListener("click",function(){
  button2.textContent++;
});

decrement2.addEventListener("click",function(){
  if(button2.textContent!=0)
  {
  button2.textContent--;
}
});
