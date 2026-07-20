/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}


/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background = "rgba(5,11,24,0.95)";
        navbar.style.padding = "12px 8%";

    }else{

        navbar.style.background = "rgba(0,0,0,.30)";
        navbar.style.padding = "18px 8%";

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements=document.querySelectorAll(
"section,.card,.stat"
);


function reveal(){

    revealElements.forEach(element=>{

        const windowHeight=window.innerHeight;

        const elementTop=element.getBoundingClientRect().top;

        if(elementTop < windowHeight-100){

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll",reveal);

reveal();



/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters=document.querySelectorAll(".stat h2");

let started=false;


function startCounter(){

    if(started) return;


    const statsSection=document.querySelector(".stats");

    if(statsSection.getBoundingClientRect().top < window.innerHeight){

        started=true;


        counters.forEach(counter=>{

            let target=parseInt(
                counter.innerText.replace(/\D/g,"")
            );

            let count=0;


            let timer=setInterval(()=>{

                count += Math.ceil(target/80);


                if(count>=target){

                    count=target;

                    clearInterval(timer);

                }


                counter.innerText=count+"+";


            },30);


        });

    }

}


window.addEventListener(
"scroll",
startCounter
);



/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backTop=document.createElement("button");

backTop.innerHTML="↑";

backTop.className="back-top";

document.body.appendChild(backTop);


window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});