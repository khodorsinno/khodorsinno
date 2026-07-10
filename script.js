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
