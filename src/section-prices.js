
/* 

NewLife4Hair.com 
JS [3/3]
Concerns: "Prices" 

LIST OF CONTENT:
_________________________

0. IMPORT
1. CONST
2. EVENT LISTENERS
3. FUNCTIONS

_.1 : Nav Big
_.2 : Nav Small
__________________________
*/


//
// 0. IMPORT
//------------

import {addEventListenerToAll, displayAll, oneActiveRestNon, oneOnRestOff, removeClassForAll} from "./myModules.js";


//
// 1. CONST
//------------

// -> main content containers

const pricesBodyExt = document.getElementById("p-m-b--ext")
const pricesBodyTreat = document.getElementById("p-m-b--treat")
const pricesBodyStyle = document.getElementById("p-m-b--style")
const pricesBodyAll = Array.from(pricesBodyStyle.parentElement.children)

// 1.1 Nav Big

const pricesNavExt = document.getElementById("p-nav-bg-ext")
const pricesNavTreat = document.getElementById("p-nav-bg-treat")
const pricesNavStyle = document.getElementById("p-nav-bg-style")
const pricesNavAll = Array.from(pricesNavStyle.parentElement.children)

// 1.2 Nav Small

const priceNavSm = document.getElementById("p-nav-sm")
const priceNavSmBotox = document.getElementById("p-nav-sm--botox")
const priceNavSmallArray = Array.from(document.getElementsByClassName("p-nav-sm--all"))

// -> treatment | animation

const priceHolderALLArray = Array.from(document.getElementsByClassName("price-holder"))
const priceLineAll = Array.from(document.getElementsByClassName("price-line"))
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

// 2.1 Nav Big

addEventListenerToAll(pricesNavAll, "click", handleBigNav)

// 2.2 Nav Small

addEventListenerToAll(priceNavSmallArray, "click", handleSmallNav)



// 3. FUNCTIONS ->
//---------------

// 3.1 Nav Big

function handleContentContainers (tgt){

    let priceBodyID;
    let navSmDisp;

    switch (tgt.id) {
        case pricesNavExt.id :
            priceBodyID = pricesBodyExt.id;
            navSmDisp = "none"        
            break;
        case pricesNavTreat.id:
            priceBodyID = pricesBodyTreat.id
            navSmDisp = "flex"  
            break;
        case pricesNavStyle.id:
            priceBodyID = pricesBodyStyle.id
            navSmDisp = "none"           
            break;
    }

    oneOnRestOff(pricesBodyAll, priceBodyID, "block")
    priceNavSm.style.display = navSmDisp
    displayAll(priceHolderALLArray, "none")
}

function handleBigNav (e) {

    const activeCl = "ns-active";

    // reset 
    removeClassForAll(priceNavSmallArray, activeCl) 
    displayAll(priceLineAll, "none")

    // set nav active class
    oneActiveRestNon(pricesNavAll, e.target.id, activeCl)

    // handle main content containers toggle
    handleContentContainers(e.target)
}

// 3.2 Nav Small

function handleSmallNav (e) {
    
    // set nav active class
    oneActiveRestNon(priceNavSmallArray, e.target.id, "ns-active")
    // set price lines
    displayAll(priceLineAll, "flex")

    let obj;
    // handle main content containers
    e.target === priceNavSmBotox 
        ? obj = 0 
        : obj = 1

    priceHolderALLArray.map((el,index) => {
        setTimeout( () => {
            el.style.display = "flex"
            el.firstElementChild.textContent = "£ " + pricesTreatment[obj].price[index]
        }, 200 + 100*index)
    })
}