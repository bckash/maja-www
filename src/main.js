

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
const bodyFusion = document.getElementById("ext-b-fusion")
const bodyMicro = document.getElementById("ext-b-micro")
const bodyShrink = document.getElementById("ext-b-shrinks")
const bodyTape = document.getElementById("ext-b-tape")
const bodyComb = document.getElementById("ext-b-comb")
const extBodyAll = document.querySelectorAll(".ext-b-all")
const bodyBotox = document.getElementById("tr-b-botox");
const bodyKreatyna = document.getElementById("tr-b-kreatyna")
const trBodyAll = document.querySelectorAll(".tr-b-all")

// "offer" "nav small" tabs
const extFusion = document.getElementById("ext-fusion")
const extMicro = document.getElementById("ext-micro")
const extShrink = document.getElementById("ext-shrinks")
const extTape = document.getElementById("ext-tape")
const extComb = document.getElementById("ext-comb")
const extAll = document.querySelectorAll(".ext-all")
const trBotox = document.getElementById("tr-botox");
const trKreatyna = document.getElementById("tr-kreatyna")
const trAll = document.querySelectorAll(".tr-all")

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
function createComponent (el, cl) {
    let comp = document.createElement(el);
    // comp.classList.add(cl);
    return comp;
}

const componentInfo = createComponent ("div", "")
const componentPhoto = createComponent ("div", "")
const componentVid = createComponent ("div", "")


// customer opinion -  animation 
const custOpinion1 = document.getElementById("cu-op-1")
const custOpinion2 = document.getElementById("cu-op-2")
const custOpinion3 = document.getElementById("cu-op-3")

// pull back nav
const pullBack = document.getElementById("pull-back");
const arrUp = document.getElementById("arrow-nav");

// prices nav
const pricesBodyExt = document.getElementById("pc-c-ext")
const pricesBodyTreat = document.getElementById("pc-c-treat")
const pricesBodyStyle = document.getElementById("pc-c-style")
const pricesNavExt = document.getElementById("prices--nav-ext")
const pricesNavTreat = document.getElementById("prices--nav-treat")
const pricesNavStyle = document.getElementById("prices--nav-style")


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

window.addEventListener("scroll", showNav);

pricesNavExt.addEventListener("click", pricesNav)
pricesNavTreat.addEventListener("click", pricesNav)
pricesNavStyle.addEventListener("click", pricesNav)

// 3. FUNCTIONS ->
//---------------


// (for A+B)

// -- for active tabs. "all" - all tabs collection
function activeTabs (all, tgt) {
    for (let i=0; i<all.length; i++) {
        if (tgt.id === all[i].id) {
            all[i].classList.add("ns-active")
        } else {
            all[i].classList.remove("ns-active")
        }
    }
}

// -- for "main body container" display toggle. "cl" - class; "all" - all body containers collection
function bodyToggle(cl, all) {
    for (let i=0; i<all.length; i++) {
        if (all[i].id === cl) {
            all[i].style.display = "block"
        } else {
            all[i].style.display = "none"
        }
    }
}    

// -- for building content inside "main body container". "arr" - array; "nr" - array element
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

    // prepare indyvidual cases - for main body toggle (in "showContent4")
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

// E) CUSTOMER OPINION ANIMATION SLIDESHOW

setTimeout(() => {

    // A

    setTimeout(()=> {
        console.log("A1 - in")
        custOpinion1.classList.add("animation__in-left-right")
    }, 0)

    setTimeout(()=> {
        console.log("A2 - in")
        custOpinion3.classList.remove("animation__out-left-right")
    }, 800)

    setTimeout(()=> {
        console.log("A1 - out")
        custOpinion1.classList.add("animation__out-left-right")
    }, 8000)

    setTimeout(()=> {
        console.log("A2 - out")
        custOpinion1.classList.remove("animation__in-left-right")
    }, 8800)

    // B

    setTimeout(()=> {
        console.log("B1 - in")
        custOpinion2.classList.add("animation__in-left-right")
    }, 9600)

    setTimeout(()=> {
        console.log("B2 - in")
        custOpinion1.classList.remove("animation__out-left-right")
    }, 10400)

    setTimeout(()=> {
        console.log("B1 - out")
        custOpinion2.classList.add("animation__out-left-right")
    }, 17600)

    setTimeout(()=> {
        console.log("B2 - out")
        custOpinion2.classList.remove("animation__in-left-right")
    }, 18400)

    // C

    setTimeout(()=> {
        custOpinion3.classList.add("animation__in-left-right")
    }, 19200)

    setTimeout(()=> {
        console.log("C2 - in")
        custOpinion2.classList.remove("animation__out-left-right")
    }, 20000)

    setTimeout(()=> {
        custOpinion3.classList.add("animation__out-left-right")
    }, 27200)

    setTimeout(()=> {
        console.log("C2 - out")
        custOpinion3.classList.remove("animation__in-left-right")
    }, 28000)

}, 0)

setInterval(() => {

    // A

    setTimeout(()=> {
        console.log("A1 - in")
        custOpinion1.classList.add("animation__in-left-right")
    }, 0)

    setTimeout(()=> {
        console.log("A2 - in")
        custOpinion3.classList.remove("animation__out-left-right")
    }, 800)

    setTimeout(()=> {
        console.log("A1 - out")
        custOpinion1.classList.add("animation__out-left-right")
    }, 8000)

    setTimeout(()=> {
        console.log("A2 - out")
        custOpinion1.classList.remove("animation__in-left-right")
    }, 8800)

    // B

    setTimeout(()=> {
        console.log("B1 - in")
        custOpinion2.classList.add("animation__in-left-right")
    }, 9600)

    setTimeout(()=> {
        console.log("B2 - in")
        custOpinion1.classList.remove("animation__out-left-right")
    }, 10400)

    setTimeout(()=> {
        console.log("B1 - out")
        custOpinion2.classList.add("animation__out-left-right")
    }, 17600)

    setTimeout(()=> {
        console.log("B2 - out")
        custOpinion2.classList.remove("animation__in-left-right")
    }, 18400)

    // C

    setTimeout(()=> {
        custOpinion3.classList.add("animation__in-left-right")
    }, 19200)

    setTimeout(()=> {
        console.log("C2 - in")
        custOpinion2.classList.remove("animation__out-left-right")
    }, 20000)

    setTimeout(()=> {
        custOpinion3.classList.add("animation__out-left-right")
    }, 27200)

    setTimeout(()=> {
        console.log("C2 - out")
        custOpinion3.classList.remove("animation__in-left-right")
    }, 28000)

}, 28800)


// F) PULL BACK NAV

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


    console.log(pos);

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

// G) "PRICES"  NAV
function pricesNav (e) {

        // set "active" and "non-active" tabs, show "body".
        function setNav (activBG, activIntro, nonAct1BG, nonAct1Intro, nonAct2BG, nonAct2Intro) {
            activBG.classList.add("ns-active");
            activIntro.style.display = "block"
            nonAct1BG.classList.remove("ns-active");
            nonAct1Intro.style.display = "none"
            nonAct2BG.classList.remove("ns-active");
            nonAct2Intro.style.display = "none";
        }

            // "extension" clicked
    if (e.target.id === pricesNavExt.id) {

        setNav(pricesNavExt, pricesBodyExt, pricesNavTreat, pricesBodyTreat, pricesNavStyle, pricesBodyStyle)

    // "treatment clicked"
    } else if (e.target.id === pricesNavTreat.id) {

        setNav(pricesNavTreat, pricesBodyTreat, pricesNavStyle, pricesBodyStyle, pricesNavExt, pricesBodyExt)
    
    // "style" clicked
    } else if (e.target.id === pricesNavStyle.id) {

        setNav(pricesNavStyle, pricesBodyStyle, pricesNavExt, pricesBodyExt, pricesNavTreat, pricesBodyTreat)

    }
}