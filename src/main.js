
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
const bodyTape = document.getElementById("extb--tape")
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

// 3. F ->
//---------------

// "offer" : "nav big" tabs 
function showContent (e) {

    //reset styles
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

    //set "active" and "non-active" tabs (display, style and intro).
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

// "offer" : "nav small" "extension"
function showContent2 (e) {

    introExt.style.display = "none";

    // active class
    for (let i=0; i<extAll.length; i++) {
        if (e.target.id === extAll[i].id) {
            extAll[i].classList.add("ns-active")
        } else {
            extAll[i].classList.remove("ns-active")
        }
    }

    // function for body toggle
    function bodyToggle(cl) {
        for (let i=0; i<extBodyAll.length; i++) {
            if (extBodyAll[i].id === cl) {
                extBodyAll[i].style.display = "block"
            } else {
                extBodyAll[i].style.display = "none"
            }
        }
    }

    // body toggle
    switch(e.target.id) {

        case "ext-fusion":
            bodyToggle("ext-b-fusion")
            break;

        case "ext-micro":
            bodyToggle("ext-b-micro")
            break;

        case "ext-shrinks":
            bodyToggle("ext-b-shrinks")
            break;

        case "ext-tape":
            bodyToggle("ext-b-tape")
            break;
            
        case "ext-comb":
            bodyToggle("ext-b-comb")
            break;
    }
}

// "offer" : "nav small" "treatment"
function showContent3(e) {

    introTreat.style.display = "none";

        // active class
        for (let i=0; i<trAll.length; i++) {
            if (e.target.id === trAll[i].id) {
                trAll[i].classList.add("ns-active")
            } else {
                trAll[i].classList.remove("ns-active")
            }
        }

        // function for body toggle
        function bodyToggle(cl) {
            for (let i=0; i<trBodyAll.length; i++) {
                if (trBodyAll[i].id === cl) {
                    trBodyAll[i].style.display = "block"
                } else {
                    trBodyAll[i].style.display = "none"
                }
            }
        }

        // body toggle
        switch(e.target.id) {

            case "tr-botox":
                bodyToggle("tr-b-botox")
                break;
    
            case "tr-kreatyna":
                bodyToggle("tr-b-kreatyna")
                break;
    
        }
}