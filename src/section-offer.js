

// 1. CONST
//------------


// "offer" "nav big" tabs
const navBigExt = document.getElementById("nav-big-ext");
const navBigTreat = document.getElementById("nav-big-treat");
const navBigStyle = document.getElementById("nav-big-style");

// "offer" "nav small" sections
const navSmallTreat = document.getElementById("nav-small-treat");
const navSmallExt = document.getElementById("nav-small-ext");
const navSmallStyle = document.getElementById("nav-small-style");

// "offer" "nav small" - "intro" body
const introExt = document.getElementById("ext-intro")
const introTreat = document.getElementById("tr-intro")
const introStyle = document.getElementById("st-intro")
const introMain = document.getElementById("o-intro")

// "offer" "nav small" - "body"
const extBodyAll = document.querySelectorAll(".ext-b-all")
const trBodyAll = document.querySelectorAll(".tr-b-all")

const bodyFusion = document.getElementById("ext-b-fusion")
const bodyMicro = document.getElementById("ext-b-micro")
const bodyShrink = document.getElementById("ext-b-shrinks")
const bodyTape = document.getElementById("ext-b-tape")
const bodyComb = document.getElementById("ext-b-comb")
const bodyBotox = document.getElementById("tr-b-botox");
const bodyKreatyna = document.getElementById("tr-b-kreatyna")


// "offer" "nav small" tabs
const extAll = document.querySelectorAll(".ext-all")
const trAll = document.querySelectorAll(".tr-all")

const extFusion = document.getElementById("ext-fusion")
const extMicro = document.getElementById("ext-micro")
const extShrink = document.getElementById("ext-shrinks")
const extTape = document.getElementById("ext-tape")
const extComb = document.getElementById("ext-comb")
const trBotox = document.getElementById("tr-botox");
const trKreatyna = document.getElementById("tr-kreatyna")


// summ of extAll and trAll
extAllArr = Array.from(extAll)
trAllArr = Array.from(trAll)
let summAllArray = [];

function addArraysToArray (arr) {
    for (let i=0; i<arr.length; i++) {
        summAllArray.push(arr[i])
    }
}

addArraysToArray(extAllArr);
addArraysToArray(trAllArr);


// multimedia for small nav "offer"
const mediaExt = [
    {   
        info: "11",
        photo: "img/extension/p1.jpg",
        vid: "img/extension/v1.jpg"
    },
    {   
        info: "12",
        photo: "img/extension/p2.jpg",
        vid: "img/extension/v2.jpg"
    },
    {   
        info: "13",
        photo: "img/extension/p3.jpg",
        vid: "img/extension/v3.jpg"
    },
    {   
        info: "14",
        photo: "img/extension/p4.jpg",
        vid: "img/extension/v4.jpg"
    },
    {   
        info: "15",
        photo: "img/extension/p5.jpg",
        vid: "img/extension/v5.jpg"
    }
]

const mediaTreat = [
    {   
        info: "21",
        photo: "img/treatment/p1.jpg",
        vid: "img/treatment/v1.jpg"
    },
    {   
        info: "22",
        photo: "img/treatment/p2.jpg",
        vid: "img/treatment/v2.jpg"
    }
]

// side nav "offer"
const sideNav = document.getElementById("side-nav")
const snInfo = document.getElementById("sn-info")
const snImg = document.getElementById("sn-img")
const snVid = document.getElementById("sn-vid")
const snAll = document.querySelectorAll(".sn-all")

// create content components for "buildContent" in "showContent".
function createComponent (el) {
    let comp = document.createElement(el);
    return comp;
}

const componentInfo = createComponent ("div")
const componentPhoto = createComponent ("div")
const componentVid = createComponent ("div")

// for info slideshow
const slidePhoto1 = document.getElementById("ihp-1")
const slidePhoto2 = document.getElementById("ihp-2")
const slidePhoto3 = document.getElementById("ihp-3")


// 2. EL
//-------------


navBigExt.addEventListener("click", showContent)
navBigTreat.addEventListener("click", showContent)
navBigStyle.addEventListener("click", showContent)

extComb.addEventListener("click", showContent2)
extFusion.addEventListener("click", showContent2)
extMicro.addEventListener("click", showContent2)
extShrink.addEventListener("click", showContent2)
extTape.addEventListener("click", showContent2)
trBotox.addEventListener("click", showContent3)
trKreatyna.addEventListener("click", showContent3)

if (sideNav) {
    snInfo.addEventListener("click", showContent4)
    snImg.addEventListener("click", showContent4)
    snVid.addEventListener("click", showContent4)
}


// 3. FUNCTIONS ->
//---------------



// [for A+B]



// -- for active tabs. 
// "all" - all tabs collection
function activeTabs (all, tgt) {
    for (let i=0; i<all.length; i++) {
        if (tgt.id === all[i].id) {
            all[i].classList.add("ns-active")
        } else {
            all[i].classList.remove("ns-active")
        }
    }
}

// -- for "main body container" display toggle. 
// "cl" - class; "all" - all body containers collection
function bodyToggle(cl, all) {
    for (let i=0; i<all.length; i++) {
        if (all[i].id === cl) {
            all[i].style.display = "block"
        } else {
            all[i].style.display = "none"
        }
    }
}    

// -- for building content inside "main body container". 
// "arr" - array; "nr" - array element
function buildContentAll (arr, nr) {

    function buildContent (comp, inner) {
        comp.innerHTML = inner;
        return comp;
    }

    buildContent(componentInfo, `<span>${arr[nr].info}</span>`)
    buildContent(componentPhoto, `<img src="${arr[nr].photo}">`)
    buildContent(componentVid, `<img src="${arr[nr].vid}">`)
}    

// -- remove previous element and append present one
function showBody(el, ch) {
    if (el.firstElementChild) {
        el.removeChild(el.firstElementChild);
      }

    el.appendChild(ch)
}    



// [MAIN]



// A) "NAV BIG" TABS (OFFER)
function showContent (e) {

    // hide "side nav" 
    sideNav.style.display = "none"

    // reset "small nav" and "body" styles
    introMain.style.display = "none";
    for (let i=0; i<trBodyAll.length; i++) {
            trBodyAll[i].style.display = "none";
    }
    for (let i=0; i<extBodyAll.length; i++) {
        extBodyAll[i].style.display = "none";
    }
    for (let i=0; i<trAll.length; i++) {
        trAll[i].classList.remove("ns-active");
}
    for (let i=0; i<extAll.length; i++) {
        extAll[i].classList.remove("ns-active");
}

    // set "active" and "non-active" tabs (display, style and intro).
    function setNav (activSM, activBG, activIntro, nonAct1SM, nonAct1BG, nonAct1Intro, nonAct2SM, nonAct2BG, nonAct2Intro) {
        activSM.style.display = "flex";
        activBG.classList.add("ns-active");
        activIntro.style.display = "block"
        nonAct1SM.style.display = "none";
        nonAct1BG.classList.remove("ns-active");
        nonAct1Intro.style.display = "none"
        nonAct2SM.style.display = "none";
        nonAct2BG.classList.remove("ns-active");
        nonAct2Intro.style.display = "none";
    }

    // "extension" clicked
    if (e.target.id === navBigExt.id) {

        setNav(navSmallExt, navBigExt, introExt, navSmallStyle, navBigStyle, introStyle, navSmallTreat, navBigTreat, introTreat)

    // "treatment clicked"
    } else if (e.target.id === navBigTreat.id) {

        setNav(navSmallTreat, navBigTreat, introTreat, navSmallExt, navBigExt, introExt, navSmallStyle, navBigStyle, introStyle)
    
    // "style" clicked
    } else if (e.target.id === navBigStyle.id) {

        setNav(navSmallStyle, navBigStyle, introStyle, navSmallTreat, navBigTreat, introTreat, navSmallExt, navBigExt, introExt)

    }
}

// B) "EXTENSION" "NAV SMALL" (OFFER)
function showContent2 (e) {

    introExt.style.display = "none";
    sideNav.style.display = "block"

    activeTabs(extAll, e.target);

    // main body toggle (in "showContent4")
    switch(e.target.id) {

        case "ext-fusion":
            bodyToggle("ext-b-fusion", extBodyAll)
            buildContentAll(mediaExt, 0);
            showBody(bodyFusion, componentInfo);
            break;

        case "ext-micro":
            bodyToggle("ext-b-micro", extBodyAll)
            buildContentAll(mediaExt, 1);
            showBody(bodyMicro, componentInfo);
            break;

        case "ext-shrinks":
            bodyToggle("ext-b-shrinks", extBodyAll)
            buildContentAll(mediaExt, 2);
            showBody(bodyShrink, componentInfo);
            break;

        case "ext-tape":
            bodyToggle("ext-b-tape", extBodyAll)
            buildContentAll(mediaExt, 3);
            showBody(bodyTape, componentInfo);
            break;
            
        case "ext-comb":
            bodyToggle("ext-b-comb", extBodyAll)
            buildContentAll(mediaExt, 4);
            showBody(bodyComb, componentInfo);
            break;
    }
}

// C) "TREATMENT" "NAV SMALL" (OFFER)
function showContent3(e) {

    introTreat.style.display = "none";
    sideNav.style.display = "block"

    activeTabs(trAll, e.target);

    // prepare indyvidual cases - for main body toggle (in "showContent4")
    switch(e.target.id) {

        case "tr-botox":
            bodyToggle("tr-b-botox", trBodyAll)
            buildContentAll(mediaTreat, 0);
            showBody(bodyBotox, componentInfo);
            break;

        case "tr-kreatyna":
            bodyToggle("tr-b-kreatyna", trBodyAll)
            buildContentAll(mediaTreat, 1);
            showBody(bodyKreatyna, componentInfo);
            break;
    }    
}

// D) SIDE NAV 
function showContent4 (e) {

    // function for changing content after clicking on icon
    function iconBodyToggle(smNavEl) {
        if (e.target.id === "sn-info") {
            showBody(smNavEl, componentInfo)
        } else if (e.target.id === "sn-img") {
            showBody(smNavEl, componentPhoto)
        } else if (e.target.id === "sn-vid") {
            showBody(smNavEl, componentVid)
        }
    } 

    // in active tab (in small nav), change content after clicking on icon
    for (let i=0; i<summAllArray.length; i++) {

        switch (summAllArray[i].classList.contains("ns-active")) {
            case true:

                switch (summAllArray[i].id) {
                    case "ext-fusion":
                        iconBodyToggle(bodyFusion)
                        break

                    case "ext-micro" :
                        iconBodyToggle(bodyMicro)
                        break

                    case "ext-shrinks" :
                        iconBodyToggle(bodyShrink)
                        break
                    
                    case "ext-tape" :
                        iconBodyToggle(bodyTape)
                        break
                    
                    case "ext-comb" :
                        iconBodyToggle(bodyComb)
                        break 

                    case "tr-botox" :
                        iconBodyToggle(bodyBotox)
                        break
                        
                    case "tr-kreatyna" :
                        iconBodyToggle(bodyKreatyna)
                        break                          
                }

                break;
        }
    }
}

// E) SLIDESHOW FOR INFO

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

slideShow (slidePhoto1, slidePhoto2, slidePhoto3, "animation__slideIN", "animation__slideOUT", 10000, 0)

