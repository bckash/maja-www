

// 1. CONST
//------------


// -> (BIG & SMALL) NAV 


const  // big, <li>
    navBigExt = document.getElementById("nav-big-ext"),
    navBigTreat = document.getElementById("nav-big-treat"),
    navBigStyle = document.getElementById("nav-big-style");

const // small, <ul>
    navSmallTreat = document.getElementById("nav-small-treat"),
    navSmallExt = document.getElementById("nav-small-ext"),
    navSmallStyle = document.getElementById("nav-small-style");

const // small, <li>
    extFusion = document.getElementById("ext-fusion"),
    extMicro = document.getElementById("ext-micro"),
    extShrink = document.getElementById("ext-shrinks"),
    extTape = document.getElementById("ext-tape"),
    extComb = document.getElementById("ext-comb"),
    trBotox = document.getElementById("tr-botox"),
    trKreatyna = document.getElementById("tr-kreatyna"),
    spinnerSt = document.getElementById("spinner-style")

const // small, <li> groups
    extAll = document.querySelectorAll(".ext-all"),
    trAll = document.querySelectorAll(".tr-all");

// array from:  small, <li> groups
//................................................
    const extAllArr = Array.from(extAll)
    const trAllArr = Array.from(trAll)
//................................................
let summAllArray = [];

function addArraysToArray (arr) {
    for (let i=0; i<arr.length; i++) {
        summAllArray.push(arr[i])
    }
}

addArraysToArray(extAllArr);
addArraysToArray(trAllArr);
summAllArray.push(navBigStyle)


//.................................................


// -> CONTENT : ELEMENTS 


const // HEADERS 
    introMain = document.getElementById("om-intro"), 
    introExt = document.getElementById("ext-intro"),
    introTreat = document.getElementById("treat-intro"),
    introStyle = document.getElementById("style-intro"),
    extBodyAll = document.querySelectorAll(".head-sm--ext"),
    trBodyAll = document.querySelectorAll(".head-sm--treat");

const // INFO big containers
    snBodyInfo = document.getElementById("ext-info"),
    snBodyImg = document.getElementById("ext-photo"),
    snBodyInfoTr = document.getElementById("treat-info"),
    snBodyImgTr = document.getElementById("treat-photo"),
    snBodyInfoSt = document.getElementById("style-info"),    
    snBodyImgSt = document.getElementById("style-photo")

const // INFO main 
    infoHolderExt = document.getElementById("js-fill-extension"),
    infoHolderTreat = document.getElementById("js-fill-treatment")

const // "info holder" fill fields | extension
    infoHolderAll = document.getElementsByClassName("fill-fields")

const // "info holder" fill fields | treatment
    infoHolderAllTr = document.getElementsByClassName("fill-fields--tr")

const // info holder for treatment
    infoTreatBotox = document.getElementById("tr-info-botox"),
    infoTreatKreatyna = document.getElementById("tr-info-kreatyna"),
    infoTreatALL = document.getElementsByClassName("tr-info");


const // PHOTO body
    photoBodyExtALL = document.getElementsByClassName("ext-photo"),
    photoBodyTrALL = document.getElementsByClassName("tr-photo");


// -> CONTENT : DATA |


// fill fields data
const mediaSN = [
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

const mediaSNTreat = [
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

// fill fields array (for functions)
function objectToAraay (arr) {

    let fillArray = []

    for (const key in arr) {
        fillArray.push(arr[key])
    }

    return fillArray;

}

const arrayFusionBonds = objectToAraay(mediaSN[0])
const arrayMicroRings = objectToAraay(mediaSN[1])
const arrayEasyShrinks = objectToAraay(mediaSN[2])
const arrayTapeOn = objectToAraay(mediaSN[3])
const arrayCombline = objectToAraay(mediaSN[4])

const arrayBotox = objectToAraay(mediaSNTreat[0])
const arrayKreatyna = objectToAraay(mediaSNTreat[1])


// -> SIDE NAV |

const // nav container 
    sideNav = document.getElementById("side-nav"),
    snInfo = document.getElementById("sn-info"),
    snImg = document.getElementById("sn-img"),
    snALL = document.getElementsByClassName("sn-all")
   

// 2. EL
//-------------


// big nav
navBigExt.addEventListener("click", showContentBigNav)
navBigTreat.addEventListener("click", showContentBigNav)
navBigStyle.addEventListener("click", showContentBigNav)

// small nav
extComb.addEventListener("click", showContentExt)
extFusion.addEventListener("click", showContentExt)
extMicro.addEventListener("click", showContentExt)
extShrink.addEventListener("click", showContentExt)
extTape.addEventListener("click", showContentExt)
trBotox.addEventListener("click", showContentTreat)
trKreatyna.addEventListener("click", showContentTreat)

// side nav
if (sideNav) {
    snInfo.addEventListener("click", showContentSideNav)
    snImg.addEventListener("click", showContentSideNav)
}


// 3. FUNCTIONS 
//---------------


// -> FOR EL FUNCTIONS |


// --> style reset for BIG NAV
function resetForBigNav () {

    sideNav.style.display = "none"
    snBodyImg.style.display = "none"
    snBodyImgTr.style.display = "none"
    snBodyInfo.style.display = "none"
    snBodyInfoTr.style.display = "none"
    snBodyInfoSt.style.display = "none"
    snBodyImgSt.style.display = "none"
    spinnerSt.style.display = "block"

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

// --> style reset for SMALL NAV
function resetForSmallNav() {
    sideNav.style.display = "block"
    snImg.classList.remove("side-nav--active");
    snInfo.classList.add("side-nav--active");
}

// --> active and inactive tabs for BIG NAV
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
function showContentBigNav (e) {

    resetForBigNav()

    if (e.target.id === "nav-big-ext") {
        setNav(navSmallExt, navBigExt, introExt, navSmallStyle, navBigStyle, introStyle, navSmallTreat, navBigTreat, introTreat)
    } else if (e.target.id === "nav-big-treat") {
        setNav(navSmallTreat, navBigTreat, introTreat, navSmallExt, navBigExt, introExt, navSmallStyle, navBigStyle, introStyle)
    } else if (e.target.id === "nav-big-style") {
        setNav(navSmallStyle, navBigStyle, introStyle, navSmallTreat, navBigTreat, introTreat, navSmallExt, navBigExt, introExt)

        setTimeout(() => {
            
            snImg.classList.remove("side-nav--active");
            snInfo.classList.add("side-nav--active");
            introStyle.style.display = "none"
            snBodyInfoSt.style.display = "block"
            spinnerSt.style.display = "none"
            sideNav.style.display = "block"

        }, 1000);
    }
}

// B) SMALL NAV : "EXTENSION"
function showContentExt (e) {

    snBodyInfoTr.style.display = "none";
    snBodyInfo.style.display = "block";
    snBodyImg.style.display = "none"
    snBodyInfoSt.style.display = "none"

    introExt.style.display = "none";
    infoHolderExt.style.display = "block";
    infoHolderTreat.style.display = "none"

    activeTabs(extAll, e.target, "ns-active");
    resetForSmallNav()

    switch(e.target.id) {

        case "ext-fusion":
            fillFields(infoHolderAll, arrayFusionBonds)
            bodyToggle("ext-b-fusion", extBodyAll)
            bodyToggle("ext-photo-fusion", photoBodyExtALL)
            break;

        case "ext-micro":
            fillFields(infoHolderAll, arrayMicroRings)
            bodyToggle("ext-b-micro", extBodyAll)
            bodyToggle("ext-photo-micro", photoBodyExtALL)
            break;

        case "ext-shrinks":
            fillFields(infoHolderAll, arrayEasyShrinks)
            bodyToggle("ext-b-shrinks", extBodyAll)
            bodyToggle("ext-photo-easy", photoBodyExtALL)            
            break;

        case "ext-tape":
            fillFields(infoHolderAll, arrayTapeOn)
            bodyToggle("ext-b-tape", extBodyAll)
            bodyToggle("ext-photo-tape", photoBodyExtALL)
            break;
            
        case "ext-comb":
            fillFields(infoHolderAll, arrayCombline)
            bodyToggle("ext-b-comb", extBodyAll)
            bodyToggle("ext-photo-comb", photoBodyExtALL)
            break;
    }
}

// C) SMALL NAV :  "TREATMENT"
function showContentTreat(e) {

    snBodyInfoTr.style.display = "block";
    snBodyInfo.style.display = "none";
    snBodyImgTr.style.display = "none"
    snBodyInfoSt.style.display = "none"

    introTreat.style.display = "none";
    infoHolderTreat.style.display = "block"
    infoHolderExt.style.display = "none"

    activeTabs(trAll, e.target, "ns-active");
    resetForSmallNav()

    // prepare indyvidual cases - for main body toggle (in "showContent4")
    switch(e.target.id) {

        case "tr-botox":
            fillFields(infoHolderAllTr,arrayBotox)
            bodyToggle("tr-b-botox", trBodyAll)
            bodyToggle("tr-photo-botox", photoBodyTrALL)

            break;

        case "tr-kreatyna":
            fillFields(infoHolderAllTr, arrayKreatyna)
            bodyToggle("tr-b-kreatyna", trBodyAll)
            bodyToggle("tr-photo-kreatyna", photoBodyTrALL)

            break;
    }    
}

// D) SIDE NAV 
function showContentSideNav (e) {

    function activeBodyAbstract (tab) {
        
        // info icon
        if (e.target === snInfo) {
            offTr = snBodyImgTr;
            offExt = snBodyImg;
            offSt = snBodyImgSt;
            onTr = snBodyInfoTr;
            onExt = snBodyInfo;
            onSt = snBodyInfoSt;

        // img icon
        } else if (e.target === snImg) {
            offTr = snBodyInfoTr;
            offExt = snBodyInfo;
            offSt =snBodyInfoSt;
            onTr = snBodyImgTr;
            onExt = snBodyImg;
            onSt = snBodyImgSt;
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




