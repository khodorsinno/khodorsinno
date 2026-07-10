const secretCode = "20/02/2026";

function checkPassword() {

    let password = document.getElementById("password").value;

    if (password === secretCode) {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerHTML = "Wrong Password ❤️";
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

const letter = `

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
const letter = `

My Poookieeeee ❤️,

From the moment you came into my life,
everything became brighter.

Every smile of yours gives me peace.

Every laugh of yours becomes my favorite song.

You are the first person I think about
when I wake up,

and the last person I think about
before I fall asleep.

Thank you for being patient with me,
for believing in me,
and for loving me.

I promise to always stand beside you,
to support you,
to protect you,
and to love you with all my heart.

No matter where life takes us,
I hope we will always walk together.

Forever Yours Wifeyyyyyy❤️

`;

const target = document.getElementById("love-text");

if(target){

let i = 0;

function typing(){

if(i < letter.length){

target.innerHTML += letter.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();

}
