
/* 

NewLife4Hair.com 
JS [2/3]
Concerns: "Offer"

LIST OF CONTENT:
_________________________

0. IMPORT
1. CONST
2. EVENT LISTENERS
3. FUNCTIONS

_.1 : Nav Big
_.2 : Nav Small
_.3 : Nav Side
__________________________
*/


//
// 0. IMPORT
//------------

import {objectValuesToArr, oneOnRestOff, oneActiveRestNon, displayAll, removeClassForAll, addEventListenerToAll} from "./myModules.js";

//
// 1. CONST
//------------

// 1.1 Nav Big

const  // <li>
    navBigExt = document.getElementById("nav-big-ext"),
    navBigTreat = document.getElementById("nav-big-treat"),
    navBigStyle = document.getElementById("nav-big-style"),
    navBigAll = Array.from(navBigStyle.parentElement.children)

// 1.2 Nav Small

const // <ul>
    navSmallTreat = document.getElementById("nav-small-treat"),
    navSmallExt = document.getElementById("nav-small-ext"),
    navSmallStyle = document.getElementById("nav-small-style"),
    navSmallAll = Array.from(navSmallStyle.parentElement.children)

const // <li>
    spinnerSt = document.getElementById("spinner-style"),  
    navSmallExtAll = Array.from(document.querySelectorAll(".ext-all")),
    navSmallTreatAll = Array.from(document.querySelectorAll(".tr-all")),
    navSmallLiAll = navSmallExtAll.concat(navSmallTreatAll),
    sum4SideNavEL = Array.from(navSmallExtAll.concat(navSmallTreatAll, navBigStyle))

const // arrow buttons (<678px)
    navSmallButtonLeft = document.getElementById("of-nv-sm-arr--left"),
    navSmallButtonRight = document.getElementById("of-nv-sm-arr--right"),
    navSmallButtons = Array.from(document.getElementsByClassName("offer-nav-small__arrows")),
    navSmallMain = document.getElementById("of-nv-sm-main");

// --> main containers for content

const // Intros
    introMain = document.getElementById("om-intro"), 
    introExt = document.getElementById("ext-intro"),
    introTreat = document.getElementById("treat-intro"),
    introStyle = document.getElementById("style-intro"),
    navIntros = Array.from(document.getElementsByClassName("omb__head"))

const // Main Sections
    mainInfoExt = document.getElementById("ext-info"),
    mainPhotoExt = document.getElementById("ext-photo"),
    mainInfoTr = document.getElementById("treat-info"),
    mainPhotoTr = document.getElementById("treat-photo"),
    mainInfoSt = document.getElementById("style-info"),    
    mainPhotoSt = document.getElementById("style-photo"),
    mainAll = [].concat(mainInfoExt, mainPhotoExt, mainInfoTr, mainPhotoTr, mainInfoSt, mainPhotoSt),
    photoBodyExtALL = Array.from(mainPhotoExt.children),
    photoBodyTrALL = Array.from(mainPhotoTr.children)
    
const // Main Section Headers
    headMainExtAll = Array.from(document.querySelectorAll(".head-sm--ext")), 
    headMainTreatAll = Array.from(document.querySelectorAll(".head-sm--treat")),
    headMainAll = [].concat(Array.from(headMainExtAll), Array.from(headMainTreatAll))

const // Main Sections fill fields
    fillFieldsContExt = document.getElementById("js-fill-extension"),
    fillFieldsContTreat = document.getElementById("js-fill-treatment"),
    fillFieldsContAll = Array.from(document.getElementsByClassName("js-fill")),
    fillFieldsExt = Array.from(document.getElementsByClassName("fill-fields")),
    fillFieldsTr = Array.from(document.getElementsByClassName("fill-fields--tr"))

// -> content

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


// 1.3 Nav Side

const 
    sideNav = document.getElementById("side-nav"),
    snInfo = document.getElementById("sn-info"),
    snPhoto = document.getElementById("sn-img"),
    snALL = Array.from(document.getElementsByClassName("sn-all"))


// 2. EL
//-------------

// 2.1 Nav Big

addEventListenerToAll(navBigAll, "click", handleBigNav)

// 2.2 Nav Small

addEventListenerToAll(navSmallExtAll, "click", showContentExt)
addEventListenerToAll(navSmallTreatAll, "click", showContentTreat)
navSmallButtonLeft.addEventListener("click", scrollContentLeft)
navSmallButtonRight.addEventListener("click", scrollContentRight)
window.addEventListener("resize", navSmallArrowsDisplay)

// 3.3 Nav Side

if (sideNav) {
    snInfo.addEventListener("click", showContentSideNav)
    snPhoto.addEventListener("click", showContentSideNav)
}


// 3. FUNCTIONS 
//---------------


// 3.1 Nav Big

function resetForBigNav () {
    const resetBigNavAll = [].concat(introMain, mainAll, headMainAll, sideNav)
    displayAll(resetBigNavAll, "none")
    removeClassForAll(navSmallLiAll, "ns-active")
    spinnerSt.style.display = "block"
}

function setNaviAndIntro (navBigID, navSmallID, introID) {
    const bigNavActive = "ns-active"
    const smallNavAvtive = "flex";
    const introActive = "block";
    oneActiveRestNon(navBigAll, navBigID, bigNavActive)
    oneOnRestOff(navSmallAll, navSmallID, smallNavAvtive)
    oneOnRestOff(navIntros, introID, introActive)
}

function handleBigNav (e) {

    resetForBigNav()
    let tgt = e.target;

    if (tgt === navBigExt){
        setNaviAndIntro(navBigExt.id, navSmallExt.id, introExt.id)
        if (window.innerWidth < 678) {
            displayAll(navSmallButtons, "block")
        }   

    } else if (tgt === navBigTreat) {
        setNaviAndIntro(navBigTreat.id, navSmallTreat.id, introTreat.id)
        displayAll(navSmallButtons, "none")

    } else if (e.target.id === "nav-big-style") {
        setNaviAndIntro(navBigStyle.id, navSmallStyle.id, introStyle.id)
        displayAll(navSmallButtons, "none")
        setTimeout(() => { 
            oneActiveRestNon(snALL, snInfo.id, "side-nav--active")
            mainInfoSt.style.display = "block"
            sideNav.style.display = "block"
            introStyle.style.display = "none"
            spinnerSt.style.display = "none"
        }, 1000);
    }
}


// 3.2 Nav Small

function fillFillFields (fieldContainer, obj){ 
    fieldContainer.map((field, index) => field.innerHTML = obj[index+1])
}

function resetSideNav() {
    const clActive = "side-nav--active"
    oneActiveRestNon(snALL, snInfo.id, clActive)
    sideNav.style.display = "block"
}

function setNavAndFillFields (
    introPage, liSmNavArray, tgtID, mainPageID, fillFieldID
    ) {
    resetSideNav()
    const dispActive = "block";
    const clActive = "ns-active"
    // set nav active tab
    oneActiveRestNon(liSmNavArray, tgtID, clActive)
    // show main page
    introPage.style.display = "none";
    oneOnRestOff(mainAll, mainPageID, dispActive)
    // show fill field container
    oneOnRestOff(fillFieldsContAll, fillFieldID, dispActive)
}

function handleMainFields(offer, headClass, fillField, photoBodyClass){

    const dispActive = "flex";
    let headArr;
    let fillFieldsArr;
    let photoBodyArr

    if (offer === "extensions") {

        headArr = headMainExtAll;
        fillFieldsArr = fillFieldsExt;
        photoBodyArr = photoBodyExtALL;

    } else if (offer === "treatment"){

        headArr = headMainTreatAll;
        fillFieldsArr = fillFieldsTr;
        photoBodyArr = photoBodyTrALL;
    }

    oneOnRestOff(headArr, headClass, dispActive)
    fillFillFields(fillFieldsArr, fillField)
    oneOnRestOff(photoBodyArr, photoBodyClass, dispActive)
}

function showContentExt (e) {

    const tgt = e.target;
    const offer = "extensions"

    setNavAndFillFields(introExt, navSmallExtAll, tgt.id, mainInfoExt.id, fillFieldsContExt.id)

    switch(tgt.id) {

        case "ext-fusion":
            handleMainFields(offer, "ext-b-fusion", arrayFusionBonds, "ext-photo-fusion")
            break;

        case "ext-micro":
            handleMainFields(offer, "ext-b-micro", arrayMicroRings, "ext-photo-micro")
            break;

        case "ext-shrinks":
            handleMainFields(offer, "ext-b-shrinks", arrayEasyShrinks, "ext-photo-easy")          
            break;

        case "ext-tape":
            handleMainFields(offer, "ext-b-tape", arrayTapeOn, "ext-photo-tape")
            break;
            
        case "ext-comb":
            handleMainFields(offer, "ext-b-comb", arrayCombline, "ext-photo-comb")
            break;
    }
}

function showContentTreat(e) {

    const tgt = e.target;
    const offer = "treatment"

    setNavAndFillFields(introTreat, navSmallTreatAll, tgt.id, mainInfoTr.id, fillFieldsContTreat.id)

    switch(tgt.id) {

        case "tr-botox":
            handleMainFields(offer, "tr-b-botox", arrayBotox, "tr-photo-botox")
            break;

        case "tr-kreatyna":
            handleMainFields(offer, "tr-b-kreatyna", arrayKreatyna, "tr-photo-kreatyna")
            break;
    }    
}


// 3.3 Nav Side

function showContentSideNav (e) {

    const flex = "flex"
    const block = "block"
    let activeSmallNav = sum4SideNavEL.filter( li => li.classList.contains("ns-active"))

    oneActiveRestNon(snALL, e.target.id, "side-nav--active")

    switch (activeSmallNav[0].parentElement.id) {

        case "nav-small-ext" :
            e.target === snInfo 
                ? oneOnRestOff(mainAll, mainInfoExt.id, block) 
                : oneOnRestOff(mainAll, mainPhotoExt.id, flex)
            break;

        case "nav-small-treat" :
            e.target === snInfo 
                ? oneOnRestOff(mainAll, mainInfoTr.id, block) 
                : oneOnRestOff(mainAll, mainPhotoTr.id, flex)
            break;

        default:
            e.target === snInfo 
                ? oneOnRestOff(mainAll, mainInfoSt.id, block) 
                : oneOnRestOff(mainAll, mainPhotoSt.id, flex)
            break;
    }
}

function scrollContentLeft (){
    navSmallMain.scrollLeft += -100
}

function scrollContentRight (){
    navSmallMain.scrollLeft += 100
}

function navSmallArrowsDisplay() {
    window.innerWidth < 678 && navBigExt.classList.contains("ns-active")
        ? displayAll(navSmallButtons, "block")
        : displayAll(navSmallButtons, "none")
}
