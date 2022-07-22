

// 1. CONST
//------------


// customer opinion -  animation 
const custOpinion1 = document.getElementById("cu-op-1")
const custOpinion2 = document.getElementById("cu-op-2")
const custOpinion3 = document.getElementById("cu-op-3")

// pull back nav
const pullBack = document.getElementById("pull-back");
const arrUp = document.getElementById("arrow-nav");

// modal
const descrModalFooter4Carousel1 = document.getElementById("mf-descr-1")
const descrModalFooter4Carousel2 = document.getElementById("mf-descr-2")
const descrModalFooter4Carousel3 = document.getElementById("mf-descr-3")
const carsuouselItemsALL = Array.from(document.getElementsByClassName("ciJS"))
const modalTriggerButton = document.getElementById("modal-trigger-button")
const mutationTagetNode = document.getElementById("mutationTN")

// 2. EL
//-------------


window.addEventListener("scroll", showNav);
modalTriggerButton.addEventListener("click", showCarouselDescriptionInModalFooter);

// arrUpLink.addEventListener("click", (()=>{
//     animatedBorder.classList.add("animation-border")
//     setTimeout(() => {
//         animatedBorder.classList.remove("animation-border")
//     }, 1500);
// }))


// 3. FUNCTIONS ->
//---------------

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

// show & hide bottom nav
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



const config = { attributes: true, childList: true, subtree: true };

function mutationCallback(mutations) {
    for (let m of mutations) {
        if (m.type === 'attributes' && !m.target.classList.contains("active") && !m.target.classList.contains("carousel-item-start")) {
            console.log(m.target)
        }
    }
}

let classObserver = new MutationObserver(mutationCallback);


// MODAL
function showCarouselDescriptionInModalFooter () {

    console.clear()



    classObserver.observe(mutationTagetNode, config)


}