
// 1. CONST
//------------

// big nav
const pricesNavExt = document.getElementById("prices--nav-ext")
const pricesNavTreat = document.getElementById("prices--nav-treat")
const pricesNavStyle = document.getElementById("prices--nav-style")

// small nav
const priceNavSm = document.getElementById("nav-small-price")
const priceNavSmBotox = document.getElementById("pr-botox")
const priceNavSmKreatyna = document.getElementById("pr-kreatyna")
const priceNavSmALL = document.getElementsByClassName("pr-all")


// content body
const pricesBodyExt = document.getElementById("pc-c-ext")
const pricesBodyTreat = document.getElementById("pc-c-treat")
const pricesBodyStyle = document.getElementById("pc-c-style")
const pricesBodyIntro = document.getElementById("pc-c-intro")

// price line
const priceLine = document.getElementsByClassName("price-line")

// price holder 
const priceHolder1 = document.getElementById("ph-1")
const priceHolder2 = document.getElementById("ph-2")
const priceHolder3 = document.getElementById("ph-3")
const priceHolderALL = document.getElementsByClassName("price-holder")
const priceHolderALLArray = Array.from(priceHolderALL)
let x;

// prices treatment 
const pricesTreatment = [
    {
        id: "botox",
        price: [40, 70, 100]
    },
    {
        id: "keratin",
        price: [50,80,110]
    }
]


// 2. EL
//-------------

pricesNavExt.addEventListener("click", pricesBigNav)
pricesNavTreat.addEventListener("click", pricesBigNav)
pricesNavStyle.addEventListener("click", pricesBigNav)

priceNavSmBotox.addEventListener("click", pricesSmallNav)
priceNavSmKreatyna.addEventListener("click", pricesSmallNav)

// 3. FUNCTIONS ->
//---------------

// big nav
function pricesBigNav (e) {

    pricesBodyIntro.style.display = "none";
    priceNavSmBotox.classList.remove("ns-active")
    priceNavSmKreatyna.classList.remove("ns-active")
    for (item of priceLine) {
        item.style.display = "none"
    }

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

    priceNavSm.style.display = "none";

    priceHolder1.style.display = "none";
    priceHolder2.style.display = "none";
    priceHolder3.style.display = "none";

    setNav(pricesNavExt, pricesBodyExt, pricesNavTreat, pricesBodyTreat, pricesNavStyle, pricesBodyStyle);

// "treatment clicked"
} else if (e.target.id === pricesNavTreat.id) {

    setNav(pricesNavTreat, pricesBodyTreat, pricesNavStyle, pricesBodyStyle, pricesNavExt, pricesBodyExt);

    priceNavSm.style.display = "flex";

// "style" clicked
} else if (e.target.id === pricesNavStyle.id) {

    priceNavSm.style.display = "none";

    priceHolder1.style.display = "none";
    priceHolder2.style.display = "none";
    priceHolder3.style.display = "none";

    setNav(pricesNavStyle, pricesBodyStyle, pricesNavExt, pricesBodyExt, pricesNavTreat, pricesBodyTreat);

}
}

// small nav
function pricesSmallNav (e) {
    
    // show price holders in different time, for animation effect
    function showSpanAbstract(collection, time, x) {

        const data = pricesTreatment[x].price

        for(let i=0; i<collection.length; i++) {
            setTimeout(()=> {
                collection[i].style.display = "flex";
                collection[i].firstElementChild.textContent = "£ "+data[i];
            }, time+i*100)
        }
    }

    switch(e.target.id) {
        case "pr-botox":
            activeTabs(priceNavSmALL, e.target, "ns-active");
            
            for (item of priceLine) {
                item.style.display = "flex"
            }

            x = 0;
            showSpanAbstract(priceHolderALL,200, x)

            break;
        
        case "pr-kreatyna":
            activeTabs(priceNavSmALL, e.target, "ns-active");

            for (item of priceLine) {
                item.style.display = "flex"
            }

            x = 1;
            showSpanAbstract(priceHolderALL,200, x)
            break;
    }


}