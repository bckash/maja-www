
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
            el3.classList.add(animIN)
        }, (time*2)+(space*4))

        setTimeout(()=> {
            // console.log("C2 - in")
            el2.classList.remove(animOut)
        }, (time*2)+(space*5))

        setTimeout(()=> {
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
            el3.classList.add(animIN)
        }, (time*2)+(space*4))

        setTimeout(()=> {
            // console.log("C2 - in")
            el2.classList.remove(animOut)
        }, (time*2)+(space*5))

        setTimeout(()=> {
            el3.classList.add(animOut)
        }, (time*3)+(space*4))

        setTimeout(()=> {
            // console.log("C2 - out")
            el3.classList.remove(animIN)
        }, (time*3)+(space*5))

    }, (time*3)+(space*5))
}