//This code alernates the background colors between a
// given set of colors as well as the background and font colors of the button

const body = document.querySelector('#body');
const btn = document.querySelector('#btn');
const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'gray', 'black'];

btn.style.color = 'black';
body.addEventListener('click', backgroundColor);

function backgroundColor(){
    const colorIndex = Math.floor(Math.random()*colors.length + 1);
    
    body.style.background = colors[colorIndex];
    btn.style.background = colors[colorIndex-1];
    btn.style.color = colors[colorIndex+1];
}
  




