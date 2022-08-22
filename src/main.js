

//
// 1. CONST
//--------------------------------


// customer opinion -  animation 
const custOpinion1 = document.getElementById("opinion-1")
const custOpinion2 = document.getElementById("opinion-2")
const custOpinion3 = document.getElementById("opinion-3")

// pull back nav
const pullBack = document.getElementById("pull-back-container");
const arrUpLink = document.getElementById("pull-back__arrow-link");
const animatedBorder = document.getElementById("pull-back__animation-border")

// MODAL
const descrModalFooter4Carousel1 = document.getElementById("modal-footer__d1")
const descrModalFooter4Carousel2 = document.getElementById("modal-footer__d2")
const descrModalFooter4Carousel3 = document.getElementById("modal-footer__d3")
const carsuouselDescrALL = Array.from(document.getElementsByClassName("modal-footer__description"))

const modalTriggerButton = document.getElementById("modal-trigger-button")
const mutationTagetNode = document.getElementById("mutationTN")

// animation
const spanDown = document.getElementById("io-offer-dn")
const spanUp = document.getElementById("io-offer-up")
const pmPleaseChoose = document.getElementById("pm-please-choose")
const logoNLSmall = document.getElementById("logo-nl4h-sm")
const aboutTriangle = document.getElementById("outline-triangle")

// paralax
const paralax = document.getElementById("paralax-content")

//
// 2. EL
//-----------------------------------



window.addEventListener("scroll", showNav);
window.addEventListener("scroll", scrollAnimation);
modalTriggerButton.addEventListener("click", showCarouselDescriptionInModalFooter);

arrUpLink.addEventListener("click", (()=>{
    animatedBorder.classList.add("animation__border")
    setTimeout(() => {
        animatedBorder.classList.remove("animation__border")
    }, 1500);
}))

window.addEventListener("resize", changeHeightWithWidth);

//
// 3. FUNCTIONS ->
//--------------------------------------


// SLIDESHOW 

// el1,2,3 - "element" to apply animation
// animIN  - "animation class name" for element to enter
// animOUT - "animation class name" for element to exit
// time    - "time in [ms]" between enter and exit
// space   - "time in [ms]" between present and next animations (between out & in)


function slideShow (el1, el2, el3, animIN, animOut, time, space) {
    // iteration 0
    setTimeout(() => {

        // A

        setTimeout(()=> {
            // console.log("A1 - in")
            el1.classList.add(animIN)
        }, 0)

        setTimeout(()=> {
            // console.log("A2 - in")
            el3.classList.remove(animOut)
        }, space)

        setTimeout(()=> {
            // console.log("A1 - out")
            el1.classList.add(animOut)
        }, time)

        setTimeout(()=> {
            // console.log("A2 - out")
            el1.classList.remove(animIN)
        }, time+space)

        // B

        setTimeout(()=> {
            // console.log("B1 - in")
            el2.classList.add(animIN)
        }, time+(space*2))

        setTimeout(()=> {
            // console.log("B2 - in")
            el1.classList.remove(animOut)
        }, time+(space*3))

        setTimeout(()=> {
            // console.log("B1 - out")
            el2.classList.add(animOut)
        }, (time*2)+(space*2))

        setTimeout(()=> {
            // console.log("B2 - out")
            el2.classList.remove(animIN)
        }, (time*2)+(space*3))

        // C

        setTimeout(()=> {
            // console.log("C1 - in")
            el3.classList.add(animIN)
        }, (time*2)+(space*4))

        setTimeout(()=> {
            // console.log("C2 - in")
            el2.classList.remove(animOut)
        }, (time*2)+(space*5))

        setTimeout(()=> {
            // console.log("C1 - out")
            el3.classList.add(animOut)
        }, (time*3)+(space*4))

        setTimeout(()=> {
            // console.log("C2 - out")
            el3.classList.remove(animIN)
        }, (time*3)+(space*5))

    }, 0)

    // iteration 1++
    setInterval(() => {

        // A

        setTimeout(()=> {
            // console.log("A1 - in")
            el1.classList.add(animIN)
        }, 0)

        setTimeout(()=> {
            // console.log("A2 - in")
            el3.classList.remove(animOut)
        }, space)

        setTimeout(()=> {
            // console.log("A1 - out")
            el1.classList.add(animOut)
        }, time)

        setTimeout(()=> {
            // console.log("A2 - out")
            el1.classList.remove(animIN)
        }, time+space)

        // B

        setTimeout(()=> {
            // console.log("B1 - in")
            el2.classList.add(animIN)
        }, time+(space*2))

        setTimeout(()=> {
            // console.log("B2 - in")
            el1.classList.remove(animOut)
        }, time+(space*3))

        setTimeout(()=> {
            // console.log("B1 - out")
            el2.classList.add(animOut)
        }, (time*2)+(space*2))

        setTimeout(()=> {
            // console.log("B2 - out")
            el2.classList.remove(animIN)
        }, (time*2)+(space*3))

        // C

        setTimeout(()=> {
            // console.log("C1 - in")
            el3.classList.add(animIN)
        }, (time*2)+(space*4))

        setTimeout(()=> {
            // console.log("C2 - in")
            el2.classList.remove(animOut)
        }, (time*2)+(space*5))

        setTimeout(()=> {
            // console.log("C1 - out")
            el3.classList.add(animOut)
        }, (time*3)+(space*4))

        setTimeout(()=> {
            // console.log("C2 - out")
            el3.classList.remove(animIN)
        }, (time*3)+(space*5))

    }, (time*3)+(space*5))
}

slideShow (custOpinion1, custOpinion2, custOpinion3, "animation__in-left-right", "animation__out-left-right", 8000, 800)


// "PULL BACK NAV"
// show & hide 
function showNav(){
    
    let pos = window.scrollY;

    function addRemove (add, remove) {
        pullBack.classList.add(add);
        pullBack.classList.remove(remove);
    }

    if (pos > 600) {
        addRemove("opa-1", "opa-0")
    } else {
        addRemove("opa-0", "opa-1")

    }

    // if (pos>0 && pos<1392) {
    //     arrUp.style.color = "var(--border-pastel-dark)";
    // } else if (pos>=1392 && pos<2019) {
    //     arrUp.style.color = "var(--marin-blue-dark)";
    // } else if (pos>=1825 && pos<3147) {
    //     arrUp.style.color = "var(--team-grey)";
    // } else if (pos>=3147 && pos<3776) {
    //     arrUp.style.color = "var(--green-nav)";
    // } else {
    //     arrUp.style.color = "var(--or-nav)";
    // }

    // console.log(pos);

} 


// test - animotion y scroll
function scrollAnimation(){
    let pos = window.scrollY;

    console.log(pos)

    if (pos>500 && pos<700) {
        aboutTriangle.classList.add("animation__move-bot")

    } else if (pos>2600 && pos<2800) {
        spanDown.classList.add("animation__move-left")
        spanUp.classList.add("animation__move-up")

    } else if (pos>4600 && pos<4800) {
        pmPleaseChoose.classList.add("animation__swirl")

    } else if (pos> 5100) {
        logoNLSmall.classList.add("animation__jelly")

    } 
}


// paralax resize
function changeHeightWithWidth(){

    let paralaxWidth = paralax.offsetWidth

    if (window.innerWidth < 780) {

        paralax.style.height = `${paralaxWidth/2 +20}px`
    }

}

//------------------------------------------------------------------------------
// setting up "mutation watch for carousel" inside modal - to catch change that i can built "display toggle function" upon ( to show "descriptions for carousel imgs" in modal footer)
// ----------------------------------------------------------------------------


// config for mutation observer
const config = { attributes: true, childList: true, subtree: true };
// callback for MO
function mutationCallback(mutations) {
    for (let m of mutations) {
        if (m.type === 'attributes' && !m.target.classList.contains("active") && !m.target.classList.contains("carousel-item-start")) {
            // console.log(m.target.id)

            function toggleVisibility(ID){
                carsuouselDescrALL.map( div => {
                    div.id === ID ? div.style.display = "flex" : div.style.display = "none"
                })
            }

            switch(m.target.id) {
                case "c1":
                    console.log("2")
                    toggleVisibility("modal-footer__d2")
                    break;
                case "c2":
                    console.log("3")
                    toggleVisibility("modal-footer__d3")
                    break;
                case "c3":
                    console.log("1")
                    toggleVisibility("modal-footer__d1")
                    break;
              }
        }
    }
}
// new MO
let classObserver = new MutationObserver(mutationCallback);


// CAROUSLE DESCRIPTIONS INSIDE MODAL
function showCarouselDescriptionInModalFooter () {
    console.clear()
    classObserver.observe(mutationTagetNode, config)
}