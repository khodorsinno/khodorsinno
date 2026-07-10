const secretCode = "20-02-2026";

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

const item = document.createElement("div");

item.classList.add("heart");

// 50% chance of heart, 50% chance of cherry blossom
item.innerHTML = Math.random() < 0.5 ? "❤️" : "🌸";

item.style.left = Math.random() * 100 + "vw";

item.style.animationDuration = (Math.random() * 4 + 4) + "s";

item.style.fontSize = (Math.random() * 20 + 15) + "px";

document.body.appendChild(item);

setTimeout(() => {
    item.remove();
}, 8000);

}

setInterval(createHeart,300);

setInterval(createFloatingItem,250);
const message = `

My Poookieeeee ❤️,

Every day with you feels like a beautiful dream.

You make my world brighter.

Your smile is my favorite view.

Your laugh is my favorite sound.

Thank you for being part of my life.

No matter where life takes us,

I promise to always love you.

Forever Yours Wifeyyyyy❤️

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
function openImage(src){

document.getElementById("popup").style.display="flex";

document.getElementById("popup-img").src=src;

}

function closeImage(){

document.getElementById("popup").style.display="none";

}
