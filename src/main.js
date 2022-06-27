

// 1. CONST
//------------


// customer opinion -  animation 
const custOpinion1 = document.getElementById("cu-op-1")
const custOpinion2 = document.getElementById("cu-op-2")
const custOpinion3 = document.getElementById("cu-op-3")

// pull back nav
const pullBack = document.getElementById("pull-back");
const arrUp = document.getElementById("arrow-nav");



// 2. EL
//-------------


window.addEventListener("scroll", showNav);



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

    if (pos>0 && pos<1392) {
        arrUp.style.color = "var(--border-pastel-dark)";
    } else if (pos>=1392 && pos<2019) {
        arrUp.style.color = "var(--marin-blue-dark)";
    } else if (pos>=1825 && pos<3147) {
        arrUp.style.color = "var(--team-grey)";
    } else if (pos>=3147 && pos<3776) {
        arrUp.style.color = "var(--green-nav)";
    } else {
        arrUp.style.color = "var(--or-nav)";
    }


    // console.log(pos);

    // "pull up menu" for window < 630px
    if (window.innerWidth < 630) {
        
        if (pos>0 && pos<1392) {
            arrUp.style.color = "var(--border-pastel-dark)";
        } else if (pos>=1392 && pos<2019) {
            arrUp.style.color = "var(--marin-blue-dark)";
        } else if (pos>=1825 && pos<3430) {
            arrUp.style.color = "var(--team-grey)";
        } else if (pos>=3430 && pos<4046) {
            arrUp.style.color = "var(--green-nav)";
        } else {
            arrUp.style.color = "var(--or-nav)";
        }

    }

    // "pull up menu" for window < 500px
    if (window.innerWidth < 500) {
        
        if (pos>0 && pos<1392) {
            arrUp.style.color = "var(--border-pastel-dark)";
        } else if (pos>=1392 && pos<2019) {
            arrUp.style.color = "var(--marin-blue-dark)";
        } else if (pos>=1825 && pos<3974) {
            arrUp.style.color = "var(--team-grey)";
        } else if (pos>=3974 && pos<4592) {
            arrUp.style.color = "var(--green-nav)";
        } else {
            arrUp.style.color = "var(--or-nav)";
        }

    }

    // "pull up menu" for window < 400px
    if (window.innerWidth < 500) {
        
        if (pos>0 && pos<1392) {
            arrUp.style.color = "var(--border-pastel-dark)";
        } else if (pos>=1392 && pos<2019) {
            arrUp.style.color = "var(--marin-blue-dark)";
        } else if (pos>=1825 && pos<3857) {
            arrUp.style.color = "var(--team-grey)";
        } else if (pos>=3857 && pos<4479) {
            arrUp.style.color = "var(--green-nav)";
        } else {
            arrUp.style.color = "var(--or-nav)";
        }

    }
} 

