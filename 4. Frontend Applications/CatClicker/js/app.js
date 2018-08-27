var elem = document.getElementById('cat-image1');
let number1 = 0;
elem.addEventListener('click', function(){
  number1++;
  document.getElementById("cat-move1").innerHTML = number1;
}, false);

var elem = document.getElementById('cat-image2');
let number2 = 0;
elem.addEventListener('click', function(){
  number2++;
  document.getElementById("cat-move2").innerHTML = number2;
}, false);