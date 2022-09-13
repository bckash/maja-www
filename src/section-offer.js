
/* 

NewLife4Hair.com 
JS [2/3]
Concerns: "Offer"

LIST OF CONTENT:



 */

//
// 0. IMPORT
//------------

import {objectValuesToArr, oneOnRestOff, oneActiveRestNon} from "./myModules.js";

//
// 1. CONST
//------------

// -> (BIG & SMALL) NAV 

const  // big  | <li>
    navBigExt = document.getElementById("nav-big-ext"),
    navBigTreat = document.getElementById("nav-big-treat"),
    navBigStyle = document.getElementById("nav-big-style"),
    navBigAll = Array.from(navBigStyle.parentElement.children)

const // small | <ul>
    navSmallTreat = document.getElementById("nav-small-treat"),
    navSmallExt = document.getElementById("nav-small-ext"),
    navSmallStyle = document.getElementById("nav-small-style"),
    navSmallAll = Array.from(navSmallStyle.parentElement.children)

const // small | <li>
    spinnerSt = document.getElementById("spinner-style"),  
    extFusion = document.getElementById("ext-fusion"),
    extMicro = document.getElementById("ext-micro"),
    extShrink = document.getElementById("ext-shrinks"),
    extTape = document.getElementById("ext-tape"),
    extComb = document.getElementById("ext-comb"),
    trBotox = document.getElementById("tr-botox"),
    trKreatyna = document.getElementById("tr-kreatyna"),

    extAll = document.querySelectorAll(".ext-all"), // del
    trAll = document.querySelectorAll(".tr-all"), // del

    navSmallExtAll = Array.from(document.querySelectorAll(".ext-all")),
    navSmallTreatAll = Array.from(document.querySelectorAll(".tr-all")),
    summAllArray = navSmallExtAll.concat(navSmallTreatAll, navBigStyle)

const // small, arrow buttons (<678px)
    navSmallButtonLeft = document.getElementById("of-nv-sm-arr--left"),
    navSmallButtonRight = document.getElementById("of-nv-sm-arr--right"),
    navSmallMain = document.getElementById("of-nv-sm-main");


// -> MAIN : ELEMENTS 

const // INTRO
    introMain = document.getElementById("om-intro"), 
    introExt = document.getElementById("ext-intro"),
    introTreat = document.getElementById("treat-intro"),
    introStyle = document.getElementById("style-intro"),
    navIntros = Array.from(document.getElementsByClassName("omb__head"))

const // MAIN SECTIONS
    mainInfoExt = document.getElementById("ext-info"),
    mainPhotoExt = document.getElementById("ext-photo"),
    mainInfoTr = document.getElementById("treat-info"),
    mainPhotoTr = document.getElementById("treat-photo"),
    mainInfoSt = document.getElementById("style-info"),    
    mainPhotoSt = document.getElementById("style-photo"),
    mainAll = [].concat(mainInfoExt, mainPhotoExt, mainInfoTr, mainPhotoTr, mainInfoSt, mainPhotoSt)

const // HEADERS
    headMainExtAll = document.querySelectorAll(".head-sm--ext"),
    headMainTreatAll = document.querySelectorAll(".head-sm--treat"),
    headMainAll = [].concat(Array.from(headMainExtAll), Array.from(headMainTreatAll))

const // FILL FIELDS CONTAINERS
    fillFieldsContExt = document.getElementById("js-fill-extension"),
    fillFieldsContTreat = document.getElementById("js-fill-treatment"),
    fillFieldsExt = document.getElementsByClassName("fill-fields"),
    fillFieldsTr = document.getElementsByClassName("fill-fields--tr")

const // PHOTO body
    photoBodyExtALL = document.getElementsByClassName("ext-photo"),
    photoBodyTrALL = document.getElementsByClassName("tr-photo");


// -> MAIN: DATA 

// fill fields (extensions)
const fillDataExt = [
    {
        id: "fusion bonds",
        about: "<dfn title='Fusion Bonds'>Hot fusion extensions</dfn> attach strands of hair to the client's head with a keratin-based tip. The process uses a heating element to attach or fuse the keratin bond and extension to the client's hair. Since human hair is 95% keratin, the fusion method is safe, comfortable and long-lasting.",
        suitable: "All hair types, great for fine/weak hair ",
        achieve: "This method is classic and reliable, creates a free-fall natural effects ",
        last: "3-4 months"
    },
    {
        id: "mico rings",
        about: "<dfn title='Micro Rings'>Micro/nano rings</dfn> are made of metal, offer hair extension application with absolutely no glue, no heat and no braid. The hair extensions strands are placed into the hairline with colour coded rings to suit your root colour. ",
        suitable: "All hair types",
        achieve: "No glue/heat or adhesives, silicine-lined protect the hair and provide more grip.",
        last: "3-4 months"
    },
    {
        id: "easy shrinks",
        about: "<dfn title='Easy Schrinks'>Shrink tube hair extensions</dfn> get their name from little plastic tubes known as “shrink tubes” or “shrinkies.” These tubes shrink when they are heated and are sometimes composed of an inner coating of keratin. Keratin is used in several hair extension methods and can naturally be found in human skin, hair, and nails.",
        suitable: "perfect for thin or short hair",
        achieve: "These are virtually undetectable, lightweight and secure. The aim of this technique is to heat shrinkies into position and blend in with the hair.",
        last: "2-3 months"
    },
    {
        id: "tape on",
        about: "<dfn title='Tape On'>Tape-in extensions</dfn> are one to one and a half inches of sections of hair that are pre-taped with medical-grade glue to your hair, making it highly secure and natural looking. The hair can be reused making this method one of the most cost effective. ",
        suitable: "all types of hair , including those with fine hair or those who have previously suffered from hair lost ",
        achieve: "lightweight and relatively invisible, lays flat against the head.",
        last: "6-8 weeks"
    },
    {
        id: "combline",
        about: "<dfn title='Combline'>CombLine hair extension</dfn> application is creating invisible, light weight and super comfortable bonds. It can be applied to the fringe, sides and crown areas - a real all over application. With the ability to straighten, blow dry, color and perm over the bonds CombLine is the best choice for any hair extension application.",
        suitable: "all hair types, perfect fot thin hair",
        achieve: "Gives both thickening and lengthening, bond are invisible. Easy to pull up and hide in ponytail.",
        last: "up to 8 weeks"
    }
]

// fill fields (treatment)
const fillDataTreat = [
    {
        id: "botox",
        about: "<dfn title='Botox'>Botox</dfn> is the ultimate way to revive your hair. An all in one treatment, restores and improves dry damged hair in various ways. It’s full of nourishing proteins, antioxidants, vitamins, conditioning oils and other hair-healthy ingredients that fill in the gaps in the hair fibres and restore it to its natural beauty.",
        suitable: "Anyone who’s hair is very damaged, over-processed, thin in structure and in need of deep restoration",
        achieve: "Restores dry damaged hair, improves texture and shine, hydrates and deeply conditions, treats split ends, tames frizz, and gives UV protection.",
        last: "3-5 months "
    },
    {
        id: "kreatyna",
        about: "<dfn title='Keratin'>A keratin treatment</dfn> is a process that smooths and often straightens hair. You might also hear it called a Brazilian keratin treatment or a Brazilian blowout. It involves applying products to the hair, blow-drying it, and sealing it with a flat iron. Keratin is a natural type of protein in your skin, hair, and nails.",
        suitable: "People who like very straight hair with a significant reduction of volume",
        achieve: "It regenerates hair in depth and straightens it without changing its structure. Rectifying dry and damaged hair",
        last: "3-4 months"
    }    
]

// fill fields array [for functions]
const arrayFusionBonds = objectValuesToArr(fillDataExt[0])
const arrayMicroRings = objectValuesToArr(fillDataExt[1])
const arrayEasyShrinks = objectValuesToArr(fillDataExt[2])
const arrayTapeOn = objectValuesToArr(fillDataExt[3])
const arrayCombline = objectValuesToArr(fillDataExt[4])
const arrayBotox = objectValuesToArr(fillDataTreat[0])
const arrayKreatyna = objectValuesToArr(fillDataTreat[1])


// -> SIDE NAV |

const // nav container 
    sideNav = document.getElementById("side-nav"),
    snInfo = document.getElementById("sn-info"),
    snPhoto = document.getElementById("sn-img"),
    snALL = document.getElementsByClassName("sn-all")
   

// 2. EL
//-------------

navBigAll.map(el => el.addEventListener("click", handleBigNav))
navSmallExtAll.map(el => el.addEventListener("click", showContentExt))
navSmallTreatAll.map(el => el.addEventListener("click", showContentTreat))
navSmallButtonLeft.addEventListener("click", scrollContentLeft)
navSmallButtonRight.addEventListener("click", scrollContentRight)
window.addEventListener("resize", navSmallArrowsDisplay)

// side nav
if (sideNav) {
    snInfo.addEventListener("click", showContentSideNav)
    snPhoto.addEventListener("click", showContentSideNav)
}



// 3. FUNCTIONS 
//---------------


// -> FOR EL FUNCTIONS |

function resetForBigNav () {
    const resetBigNavAll = [].concat(introMain, mainAll, headMainAll, sideNav)
    const removeActiveNavSmall = navSmallExtAll.concat(navSmallTreatAll)
    resetBigNavAll.map(el => el.style.display="none")
    removeActiveNavSmall.map(el => el.classList.remove("ns-active"))
    spinnerSt.style.display = "block"
}

function resetForSmallNav() {
    sideNav.style.display = "block"
    snPhoto.classList.remove("side-nav--active");
    snInfo.classList.add("side-nav--active");
}

function setNaviAndIntro (navBigID, navSmallID, introID) {
    const bigNavActive = "ns-active"
    const smallNavAvtive = "flex";
    const introActive = "block";
    oneActiveRestNon(navBigAll, navBigID, bigNavActive)
    oneOnRestOff(navSmallAll, navSmallID, smallNavAvtive)
    oneOnRestOff(navIntros, introID, introActive)
}


// --> takes array of all nav tabs,  adds active class to choosen tab, and innactive to rest
function activeTabs (all, tgt, cl) {
    for (let i=0; i<all.length; i++) {
        if (tgt.id === all[i].id) {
            all[i].classList.add(cl)
        } else {
            all[i].classList.remove(cl)
        }
    }
}

// --> takes collection of all content, toglles visibility when clicking on nav tab
function bodyToggle(cl, all) {
    for (let i=0; i<all.length; i++) {
        if (all[i].id === cl) {
            all[i].style.display = "flex"
        } else {
            all[i].style.display = "none"
        }
    }
}    

// --> fill the fields in "info holder" (beneath carousel comnponent), when clicking on "small nav" tabs. 
function fillFields(arrElements, arrTxt) {
    for (let i=0; i<arrElements.length; i++){
        arrElements[i].innerHTML = arrTxt[i+1]
    }
}



// -> EL FUNCTIONS |


// A) BIG NAV
function handleBigNav (e) {

    resetForBigNav()
    let tgt = e.target;

    if (tgt === navBigExt){
        setNaviAndIntro(navBigExt.id, navSmallExt.id, introExt.id)
        if (window.innerWidth < 678) {
            navSmallButtonLeft.style.display = "block"
            navSmallButtonRight.style.display = "block"
        }   

    } else if (tgt === navBigTreat) {
        setNaviAndIntro(navBigTreat.id, navSmallTreat.id, introTreat.id)
        navSmallButtonLeft.style.display = "none"
        navSmallButtonRight.style.display = "none"

    } else if (e.target.id === "nav-big-style") {
        setNaviAndIntro(navBigStyle.id, navSmallStyle.id, introStyle.id)
        navSmallButtonLeft.style.display = "none"
        navSmallButtonRight.style.display = "none"

        setTimeout(() => { 
            snPhoto.classList.remove("side-nav--active");
            snInfo.classList.add("side-nav--active");
            introStyle.style.display = "none"
            mainInfoSt.style.display = "block"
            spinnerSt.style.display = "none"
            sideNav.style.display = "block"
        }, 1000);
    }
}

// B) SMALL NAV : "EXTENSION"
function showContentExt (e) {

    mainInfoTr.style.display = "none";
    mainInfoExt.style.display = "block";
    mainPhotoExt.style.display = "none"
    mainInfoSt.style.display = "none"

    introExt.style.display = "none";
    fillFieldsContExt.style.display = "block";
    fillFieldsContTreat.style.display = "none"

    activeTabs(extAll, e.target, "ns-active");
    resetForSmallNav()

    switch(e.target.id) {

        case "ext-fusion":
            fillFields(fillFieldsExt, arrayFusionBonds)
            bodyToggle("ext-b-fusion", headMainExtAll)
            bodyToggle("ext-photo-fusion", photoBodyExtALL)
            break;

        case "ext-micro":
            fillFields(fillFieldsExt, arrayMicroRings)
            bodyToggle("ext-b-micro", headMainExtAll)
            bodyToggle("ext-photo-micro", photoBodyExtALL)
            break;

        case "ext-shrinks":
            fillFields(fillFieldsExt, arrayEasyShrinks)
            bodyToggle("ext-b-shrinks", headMainExtAll)
            bodyToggle("ext-photo-easy", photoBodyExtALL)            
            break;

        case "ext-tape":
            fillFields(fillFieldsExt, arrayTapeOn)
            bodyToggle("ext-b-tape", headMainExtAll)
            bodyToggle("ext-photo-tape", photoBodyExtALL)
            break;
            
        case "ext-comb":
            fillFields(fillFieldsExt, arrayCombline)
            bodyToggle("ext-b-comb", headMainExtAll)
            bodyToggle("ext-photo-comb", photoBodyExtALL)
            break;
    }
}

// C) SMALL NAV :  "TREATMENT"
function showContentTreat(e) {

    mainInfoTr.style.display = "block";
    mainInfoExt.style.display = "none";
    mainPhotoTr.style.display = "none"
    mainInfoSt.style.display = "none"

    introTreat.style.display = "none";
    fillFieldsContTreat.style.display = "block"
    fillFieldsContExt.style.display = "none"

    activeTabs(trAll, e.target, "ns-active");
    resetForSmallNav()

    // prepare indyvidual cases - for main body toggle (in "showContent4")
    switch(e.target.id) {

        case "tr-botox":
            fillFields(fillFieldsTr,arrayBotox)
            bodyToggle("tr-b-botox", headMainTreatAll)
            bodyToggle("tr-photo-botox", photoBodyTrALL)

            break;

        case "tr-kreatyna":
            fillFields(fillFieldsTr, arrayKreatyna)
            bodyToggle("tr-b-kreatyna", headMainTreatAll)
            bodyToggle("tr-photo-kreatyna", photoBodyTrALL)

            break;
    }    
}

// D) SIDE NAV 
function showContentSideNav (e) {

    function activeBodyAbstract (tab) {
        
        let offTr; 
        let offExt; 
        let offSt;
        let onTr;
        let onExt; 
        let onSt;

        // info icon
        if (e.target === snInfo) {
            offTr = mainPhotoTr;
            offExt = mainPhotoExt;
            offSt = mainPhotoSt;
            onTr = mainInfoTr;
            onExt = mainInfoExt;
            onSt = mainInfoSt;

        // img icon
        } else if (e.target === snPhoto) {
            offTr = mainInfoTr;
            offExt = mainInfoExt;
            offSt = mainInfoSt;
            onTr = mainPhotoTr;
            onExt = mainPhotoExt;
            onSt = mainPhotoSt;
        }

        offExt.style.display = "none"
        offTr.style.display = "none"
        offSt.style.display = "none"
        activeTabs(snALL, e.target,"side-nav--active")

        if (tab.id === "tr-botox" || tab.id === "tr-kreatyna") {
            onTr.style.display = "block"
        } else if (tab.id !== "tr-botox" && tab.id !== "tr-kreatyna" && tab.id !==navBigStyle.id) {
            onExt.style.display = "block"
        } else if (tab.id === navBigStyle.id) {
            onSt.style.display = "block"
        }
    }

    // "extensions" and "treatment"
    function mapActiveElement (arr, activeClass, fun) {
        arr.map(el => {
            if (el.classList.contains(activeClass)) {
                fun(el) 
            } 
        })
    }

    mapActiveElement(summAllArray, "ns-active", activeBodyAbstract)
}

// E) SMALL NAV : SCROLL
function scrollContentLeft (){
    navSmallMain.scrollLeft += -100
}

function scrollContentRight (){
    navSmallMain.scrollLeft += 100
}

// F) SMALL NAV : "ARROWS DISPLAY" CONTROL 
function navSmallArrowsDisplay() {
    if (window.innerWidth < 678 && navBigExt.classList.contains("ns-active")) {
        navSmallButtonLeft.style.display = "block"
        navSmallButtonRight.style.display = "block"
    } else {
        navSmallButtonLeft.style.display = "none"
        navSmallButtonRight.style.display = "none"
    }
}
