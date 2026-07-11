const secretCode = "20/02/2026";

function checkPassword(){

let password = document.getElementById("password").value;

if(password===secretCode){

window.location.href="home.html";

}

else{

document.getElementById("error").innerHTML="Wrong Password ❤️";

}

}

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*4+4)+"s";

heart.style.fontSize=(Math.random()*20+15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,300);
function createFloatingItem(){

const container=document.getElementById("background-animation");

if(!container) return;

const item=document.createElement("div");

const heart=Math.random()<0.5;

item.className=heart?"floating-heart":"floating-flower";

item.innerHTML=heart?"❤":"🌸";

item.style.left=Math.random()*100+"vw";

item.style.fontSize=(18+Math.random()*20)+"px";

item.style.animationDuration=(6+Math.random()*8)+"s";

item.style.animationDelay=Math.random()*2+"s";

container.appendChild(item);

setTimeout(()=>{

item.remove();

},14000);

}

setInterval(createFloatingItem,250);
const message = `

My Pooookieeeeee ❤️,

Every day with you feels like a beautiful dream.

You make my world brighter.

Your smile is my favorite view.

Your laugh is my favorite sound.

Thank you for being part of my life.

No matter where life takes us,

I promise to always love you.

Forever Yours Wifeyyyyyyyy❤️

`;

let index = 0;

function typeLetter(){

const target=document.getElementById("typing");

if(!target) return;

if(index<message.length){

target.innerHTML+=message.charAt(index);

index++;

setTimeout(typeLetter,40);

}

}

window.onload=typeLetter;
