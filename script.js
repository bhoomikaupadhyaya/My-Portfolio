// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// ==========================
// Typing Animation
// ==========================

const words = [

    "Aspiring Software Engineer",
    "Full Stack Developer",
    "AI Enthusiast",
    "Cloud Learner"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?40:90);

}

typeEffect();

// ==========================
// Scroll To Top
// ==========================

const scrollBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        scrollBtn.style.display = "flex";

    }

    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==========================
// Active Navigation
// ==========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop-150;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")
        === "#" + current){

            link.classList.add("active");

        }

    });

});

// ==========================
// Scroll Reveal Animation
// ==========================

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

});

document.querySelectorAll(

".mini-card,.project-card,.achievement-card,.timeline-card,.contact-links a,.featured-container"

)

.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ==========================
// Button Ripple Effect
// ==========================

document.querySelectorAll(

".primary-btn,.secondary-btn,.project-links a"

).forEach(button=>{

button.addEventListener("click",function(e){

const circle =
document.createElement("span");

const x =
e.clientX -
this.getBoundingClientRect().left;

const y =
e.clientY -
this.getBoundingClientRect().top;

circle.style.left = x+"px";

circle.style.top = y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ==========================
// Navbar Shadow
// ==========================

const navbar =
document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY > 60){

navbar.classList.add("nav-scroll");

}

else{

navbar.classList.remove("nav-scroll");

}

});

// ==========================
// Footer Year
// ==========================

const year =
new Date().getFullYear();

document.querySelector(".copyright").innerHTML =
`© ${year} Bhoomika Upadhyaya. All Rights Reserved.`;