
// 1. CONST
//------------

// prices nav
const pricesBodyExt = document.getElementById("pc-c-ext")
const pricesBodyTreat = document.getElementById("pc-c-treat")
const pricesBodyStyle = document.getElementById("pc-c-style")
const pricesBodyIntro = document.getElementById("pc-c-intro")
const pricesNavExt = document.getElementById("prices--nav-ext")
const pricesNavTreat = document.getElementById("prices--nav-treat")
const pricesNavStyle = document.getElementById("prices--nav-style")

// price holder 
const priceHolder1 = document.getElementById("ph-1")
const priceHolder2 = document.getElementById("ph-2")
const priceHolder3 = document.getElementById("ph-3")


// 2. EL
//-------------

pricesNavExt.addEventListener("click", pricesNav)
pricesNavTreat.addEventListener("click", pricesNav)
pricesNavStyle.addEventListener("click", pricesNav)


// 3. FUNCTIONS ->
//---------------

// "PRICES"  NAV
function pricesNav (e) {

    pricesBodyIntro.style.display = "none";

    // set "active" and "non-active" tabs, show "body".
    function setNav (activBG, activIntro, nonAct1BG, nonAct1Intro, nonAct2BG, nonAct2Intro) {
        activBG.classList.add("ns-active");
        activIntro.style.display = "block"
        nonAct1BG.classList.remove("ns-active");
        nonAct1Intro.style.display = "none"
        nonAct2BG.classList.remove("ns-active");
        nonAct2Intro.style.display = "none";
    }

    function showSpan(sp, time) {
        setTimeout(()=> {
            sp.style.display = "flex"
            console.log("fi")
        }, time)

    }

// "extension" clicked
if (e.target.id === pricesNavExt.id) {

    priceHolder1.style.display = "none";
    priceHolder2.style.display = "none";
    priceHolder3.style.display = "none";

    setNav(pricesNavExt, pricesBodyExt, pricesNavTreat, pricesBodyTreat, pricesNavStyle, pricesBodyStyle);

// "treatment clicked"
} else if (e.target.id === pricesNavTreat.id) {

    setNav(pricesNavTreat, pricesBodyTreat, pricesNavStyle, pricesBodyStyle, pricesNavExt, pricesBodyExt);

    showSpan(priceHolder1, 200)
    showSpan(priceHolder2, 300)
    showSpan(priceHolder3, 400)

// "style" clicked
} else if (e.target.id === pricesNavStyle.id) {

    priceHolder1.style.display = "none";
    priceHolder2.style.display = "none";
    priceHolder3.style.display = "none";

    setNav(pricesNavStyle, pricesBodyStyle, pricesNavExt, pricesBodyExt, pricesNavTreat, pricesBodyTreat);

}
}