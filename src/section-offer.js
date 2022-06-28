

// 1. CONST
//------------


const  // "nav big" tabs
    navBigExt = document.getElementById("nav-big-ext"),
    navBigTreat = document.getElementById("nav-big-treat"),
    navBigStyle = document.getElementById("nav-big-style");


const // "nav small" sections
    navSmallTreat = document.getElementById("nav-small-treat"),
    navSmallExt = document.getElementById("nav-small-ext"),
    navSmallStyle = document.getElementById("nav-small-style");


const // "nav small" - "intro" body
    introExt = document.getElementById("ext-intro"),
    introTreat = document.getElementById("tr-intro"),
    introStyle = document.getElementById("st-intro"),
    introMain = document.getElementById("o-intro");


const // "nav small" - "body"
    extBodyAll = document.querySelectorAll(".ext-b-all"),
    trBodyAll = document.querySelectorAll(".tr-b-all");

const 
    bodyFusion = document.getElementById("ext-b-fusion"),
    bodyMicro = document.getElementById("ext-b-micro"),
    bodyShrink = document.getElementById("ext-b-shrinks"),
    bodyTape = document.getElementById("ext-b-tape"),
    bodyComb = document.getElementById("ext-b-comb"),
    bodyBotox = document.getElementById("tr-b-botox"),
    bodyKreatyna = document.getElementById("tr-b-kreatyna"),
    infoHolderExt = document.getElementById("info-holder__extension")



const // "nav small" tabs
    extAll = document.querySelectorAll(".ext-all"),
    trAll = document.querySelectorAll(".tr-all");

const 
    extFusion = document.getElementById("ext-fusion"),
    extMicro = document.getElementById("ext-micro"),
    extShrink = document.getElementById("ext-shrinks"),
    extTape = document.getElementById("ext-tape"),
    extComb = document.getElementById("ext-comb"),
    trBotox = document.getElementById("tr-botox"),
    trKreatyna = document.getElementById("tr-kreatyna");


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


const // "info holder" elements
    infoHolderAbout = document.getElementById("ih-about"),
    infoHolderSuitable = document.getElementById("ih-suitable"),
    infoHolderAchieve = document.getElementById("ih-achieve"),
    infoHolderLast = document.getElementById("ih-last")


// MULTIMEDIA


// "nav small" mulrimedia
const mediaSN = [
    {
        id: "fusion bonds",
        about: "Hot fusion extensions attach strands of hair to the client's head with a keratin-based tip. The process uses a heating element to attach or fuse the keratin bond and extension to the client's hair. Since human hair is 95% keratin, the fusion method is safe, comfortable and long-lasting.",
        suitable: "all hair types, great for fine/weak hair ",
        achieve: "This method is classic and reliable, creates a free-fall natural effects ",
        last: "3-4 months"
    },
    {
        id: "mico rings",
        about: "Micro/nano ring are made od metal, offer hair extension application with absolutely no glue, no heat and no braid. The hair extensions strands are placed into the hairline with colour coded rings to suit your root colour. ",
        suitable: "all hair types",
        achieve: "method use no glue/heat or adhesives, silicine-lined protect the hair and provide more grip.",
        last: "3-4 months"
    },
    {
        id: "easy shrinks",
        about: "Shrink tube hair extensions get their name from little plastic tubes known as “shrink tubes” or “shrinkies.” These tubes shrink when they are heated and are sometimes composed of an inner coating of keratin. Keratin is used in several hair extension methods and can naturally be found in human skin, hair, and nails.",
        suitable: "perfect for thin or short hair",
        achieve: "These are virtually undetectable, lightweight and secure. The aim of this technique is to heat shrinkies into position and blend in with the hair.",
        last: "2-3 months"
    },
    {
        id: "tape on",
        about: "Tape-in extensions are one to one and a half inches of sections of hair that are pre-taped with medical-grade glue to your hair, making it highly secure and natural looking. The hair can be reused making this method one of the most cost effective. ",
        suitable: "all types of hair , including those with fine hair or those who have previously suffered from hair lost ",
        achieve: "lightweight and relatively invisible, lays flat against the head.",
        last: "6-8 weeks"
    },
    {
        id: "combline",
        about: "CombLine hair extension application is creating invisible, light weight and super comfortable bonds. It is for both men and women of all ages, an extremely versatile extension application used for both thickening and lengthening, it can be applied to the fringe, sides and crown areas a Real all over application. With the ability to straighten, blow dry, color and perm over the bonds CombLine is the best choice for any hair extension application.",
        suitable: "all hair types, perfect fot thin hair",
        achieve: "Gives both thickening and lengthening, bond are invisible. Easy to pull up and hide in ponytail.",
        last: "up to 8 weeks"
    }
]

// "side nav" multimedia
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

// "side nav" 
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
let slideshowControl10;
let slideshowControl11;


// 2. EL
//-------------

// big nav
navBigExt.addEventListener("click", showContentBigNav)
navBigTreat.addEventListener("click", showContentBigNav)
navBigStyle.addEventListener("click", showContentBigNav)

// small nav
extComb.addEventListener("click", showContent2)
extFusion.addEventListener("click", showContent2)
extMicro.addEventListener("click", showContent2)
extShrink.addEventListener("click", showContent2)
extTape.addEventListener("click", showContent2)

trBotox.addEventListener("click", showContent3)
trKreatyna.addEventListener("click", showContent3)

// side nav
if (sideNav) {
    snInfo.addEventListener("click", showContent4)
    snImg.addEventListener("click", showContent4)
    snVid.addEventListener("click", showContent4)
}


// 3. FUNCTIONS ->
//---------------


// [SIDE] for A,B,C


// --> for active tabs. 
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

// --> for "main body container" display toggle. 
// "cl"  - class; 
// "all" - all body containers collection
function bodyToggle(cl, all) {
    for (let i=0; i<all.length; i++) {
        if (all[i].id === cl) {
            all[i].style.display = "block"
        } else {
            all[i].style.display = "none"
        }
    }
}    

// --> for building content inside "main body container". 
// "arr" - array; 
//  "nr" - array element
function buildContentAll (arr, nr) {

    function buildContent (comp, inner) {
        comp.innerHTML = inner;
        return comp;
    }

    buildContent(componentInfo, `<span>${arr[nr].info}</span>`)
    buildContent(componentPhoto, `<img src="${arr[nr].photo}">`)
    buildContent(componentVid, `<img src="${arr[nr].vid}">`)
}    

// --> fill the fields in in "info holder" (beneath carousel comnponent), when clicking on "small nav" tabs
function fillFields() {
    
}

// --> reset small & side nav styles
function resetForBigNav () {
    // hide "side nav" 
    sideNav.style.display = "none"
    infoHolderExt.style.display = "none"

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
}

// --> set "active" and "non-active" tabs (display, style and intro).
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



// [MAIN]

// A) BIG NAV

function showContentBigNav (e) {

    resetForBigNav()

    if (e.target.id === "nav-big-ext") {
        setNav(navSmallExt, navBigExt, introExt, navSmallStyle, navBigStyle, introStyle, navSmallTreat, navBigTreat, introTreat)
    } else if (e.target.id === "nav-big-treat") {
        setNav(navSmallTreat, navBigTreat, introTreat, navSmallExt, navBigExt, introExt, navSmallStyle, navBigStyle, introStyle)
    } else if (e.target.id === "nav-big-style") {
        setNav(navSmallStyle, navBigStyle, introStyle, navSmallTreat, navBigTreat, introTreat, navSmallExt, navBigExt, introExt)
    }
}

// B) "EXTENSION" -> "NAV SMALL" 
function showContent2 (e) {

    introExt.style.display = "none";
    sideNav.style.display = "block";
    infoHolderExt.style.display = "block";

    activeTabs(extAll, e.target);

    // main body toggle (in "showContent4")
    switch(e.target.id) {

        case "ext-fusion":

            bodyToggle("ext-b-fusion", extBodyAll)
            break;

        case "ext-micro":

            bodyToggle("ext-b-micro", extBodyAll)
            break;

        case "ext-shrinks":

            bodyToggle("ext-b-shrinks", extBodyAll)            
            break;

        case "ext-tape":

            bodyToggle("ext-b-tape", extBodyAll)
            break;
            
        case "ext-comb":

            bodyToggle("ext-b-comb", extBodyAll)
            break;
    }
}

// C) "TREATMENT" -> "NAV SMALL" 
function showContent3(e) {

    introTreat.style.display = "none";
    sideNav.style.display = "block"

    activeTabs(trAll, e.target);

    // prepare indyvidual cases - for main body toggle (in "showContent4")
    switch(e.target.id) {

        case "tr-botox":
            // bodyToggle("tr-b-botox", trBodyAll)
            // buildContentAll(mediaTreat, 0);
            showBody(bodyBotox, componentInfo);
            break;

        case "tr-kreatyna":
            // bodyToggle("tr-b-kreatyna", trBodyAll)
            // buildContentAll(mediaTreat, 1);
            showBody(bodyKreatyna, componentInfo);
            break;
    }    
}

// D) SIDE NAV 
function showContent4 (e) {

    // function for changing content after clicking on icon
    function iconBodyToggle(smNavEl) {
        if (e.target.id === "sn-info") {

        } else if (e.target.id === "sn-img") {

        } else if (e.target.id === "sn-vid") {

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




