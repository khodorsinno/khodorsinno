/* ==========================================
   SECRET PASSWORD
========================================== */

const secretCode = "20/02/2026";

function checkPassword() {

    const password = document.getElementById("password");

    if (!password) return;

    if (password.value.trim() === secretCode) {

        window.location.href = "home.html";

    } else {

        const error = document.getElementById("error");

        if (error) {
            error.innerHTML = "Wrong Password ❤️";
        }

    }

}


/* ==========================================
   FLOATING HEARTS & CHERRY BLOSSOMS
========================================== */

function createFloatingItem() {

    const item = document.createElement("div");

    item.classList.add("heart");

    item.innerHTML = Math.random() < 0.6 ? "❤️" : "🌸";

    item.style.left = Math.random() * 100 + "vw";

    item.style.fontSize = (15 + Math.random() * 20) + "px";

    item.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 10000);

}

setInterval(createFloatingItem, 350);


/* ==========================================
   LOVE LETTER TYPEWRITER
========================================== */

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

Forever Yours Wifeyyyyy ❤️

`;

window.addEventListener("DOMContentLoaded", () => {

    const target = document.getElementById("love-text");

    if (target) {

        let i = 0;

        function typeWriter() {

            if (i < letter.length) {

                target.innerHTML += letter.charAt(i);

                i++;

                setTimeout(typeWriter, 35);

            }

        }

        typeWriter();

    }

});


/* ==========================================
   GALLERY POPUP
========================================== */

function openImage(src) {

    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    if (!popup || !popupImg) return;

    popup.style.display = "flex";
    popupImg.src = src;

}

function closeImage() {

    const popup = document.getElementById("popup");

    if (!popup) return;

    popup.style.display = "none";

}


/* ==========================================
   PRESS ENTER TO LOGIN
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("password");

    if (input) {

        input.addEventListener("keypress", function(e) {

            if (e.key === "Enter") {

                checkPassword();

            }

        });

    }

});
