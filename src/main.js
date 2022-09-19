
/* 

NewLife4Hair.com 
JS [1/3]
Concerns: "Different Parts of Website"

LIST OF CONTENT:
________________

0. IMPORT
1. CONST
2. EVENT LISTENERS
3. FUNCTIONS

_.1 : VSA - vertical scroll animations (About Me, Offer, Prices, Footer)
_.2 : Modal Footer (About ME)
_.3 : Paralax Resize (Paralax)
_.4 : Customer Opinion Slideshow (Customer Opinion)
_.5 : Pull Back Navi (Pull back)
________________________________
*/


//
// 0. IMPORT
//------------

import {oneOnRestOff, changeHeightWithWidth, addRemoveClass} from "./myModules.js";
import {slideshow43} from "./slideshow-module.js";

//
// 1. CONST
//------------

// 1.1 VSA

const aboutTriangle = document.getElementById("outline-triangle")
const aboutTriangle2 = document.getElementById("outline-triangle--2")
const spanDown = document.getElementById("io-offer-dn")
const spanUp = document.getElementById("io-offer-up")
const pmPleaseChoose = document.getElementById("pm-please-choose")
const logoNLSmall = document.getElementById("logo-nl4h-sm")

// 1.2 Modal

const carsuouselDescrALL = Array.from(document.getElementsByClassName("modal-footer__description"))
const modalTriggerButton = document.getElementById("modal-trigger-button")
const mutationTagetNode = document.getElementById("mutationTN")

// 1.3 Paralax

const param1 = 1/2
const param2 = 20
const paralax = document.getElementById("paralax-content")

// 1.4 COS

const custOpinionAll = Array.from(document.getElementsByClassName("opinions"))

const slideShowObject = {
    arr3: custOpinionAll,
    time: 12900,
    animDuration: 200,
    space: 300,
    animationIN: "animation__slideIN",
    animationOUT: "animation__slideOUT",
}

// 1.5 PBN

const pullBack = document.getElementById("pull-back-container");
const arrUpLink = document.getElementById("pull-back__arrow-link");
const animatedBorder = document.getElementById("pull-back__animation-border")



//
// 2. EL
//--------

window.addEventListener("scroll", scrollAnimation); // 2.1
modalTriggerButton.addEventListener("click", showCarouselDescriptionInModalFooter); // 2.2
window.addEventListener("resize", responsiveHeight); // 2.3
window.addEventListener("scroll", showNav); // 2.4
arrUpLink.addEventListener("click", (()=>{
    animatedBorder.classList.add("animation__border")
    setTimeout(() => {
        animatedBorder.classList.remove("animation__border")
    }, 1500);
})) // 2.4



//
// 3. FUNCTIONS ->
//------------------


// 3.1 VSA

function scrollAnimation(){
    let scrollPosition = window.scrollY;
    // About Me
    if (scrollPosition>500 && scrollPosition<700) {
        aboutTriangle.classList.add("animation__move-bot")
        aboutTriangle2.classList.add("animation__move-bot")
    // Offer
    } else if (scrollPosition>2600 && scrollPosition<2800) {
        spanDown.classList.add("animation__move-left")
        spanUp.classList.add("animation__move-up")
    // Prices
    } else if (scrollPosition>4600 && scrollPosition<4800) {
        pmPleaseChoose.classList.add("animation__swirl")
    // Footer
    } else if (scrollPosition> 5100) {
        logoNLSmall.classList.add("animation__jelly")      
    } 
}

// 3.2 Modal

// a) config for "mutation observer for carousel" inside bootstrap modal - to catch a DOM Tree change to attach "display toggle function" upon -> to show "descriptions for carousel imgs" in modal footer)
const config = { attributes: true, childList: true, subtree: true };

// b) callback for MO
function mutationCallback(mutations) {
    for (let m of mutations) {
        if (m.type === 'attributes' && !m.target.classList.contains("active") && !m.target.classList.contains("carousel-item-start")) {
            
            const arr = carsuouselDescrALL;
            const id1 = "modal-footer__d1"
            const id2 = "modal-footer__d2"
            const id3 = "modal-footer__d3"
            const dsp = "flex"
            
            switch(m.target.id) {
                case "c1":
                    // console.log("2")
                    oneOnRestOff(arr,id2,dsp)
                    break;
                case "c2":
                    // console.log("3")
                    oneOnRestOff(arr,id3,dsp)
                    break;
                case "c3":
                    // console.log("1")
                    oneOnRestOff(arr,id1,dsp)    
                    break;
                }
        }
    }
}
// c) MO
let classObserver = new MutationObserver(mutationCallback);

// d)
function showCarouselDescriptionInModalFooter () {
    classObserver.observe(mutationTagetNode, config)
}

// 3.3 Paralax

function responsiveHeight(){
    if (window.innerWidth < 780) {
        changeHeightWithWidth(paralax,param1,param2)
    }
}

// 3.4 POS

slideshow43(slideShowObject)

// 3.5 PBN

function showNav(){ 
    let c0 = "opa-0"
    let c1 = "opa-1"
    let scrollPosition = window.scrollY;
    scrollPosition > 600 
        ? addRemoveClass(pullBack, c1, c0)
        : addRemoveClass(pullBack, c0, c1)
} 

