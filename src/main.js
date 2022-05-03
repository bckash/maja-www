
// const

const navBigExt = document.getElementById("nav-big-ext");
const navBigTreat = document.getElementById("nav-big-treat");
const navBigStyle = document.getElementById("nav-big-style");

const navSmallTreat = document.getElementById("nav-small-treat");
const navSmallExt = document.getElementById("nav-small-ext");
const navSmallStyle = document.getElementById("nav-small-style");

//EL

navBigExt.addEventListener("click", showContent)
navBigTreat.addEventListener("click", showContent)
navBigStyle.addEventListener("click", showContent)

// offer: small nav 
function showContent (e) {

    //set display and active state
    function setNav (activSM, activBG, nonAct1SM, nonAct1BG, nonAct2SM, nonAct2BG) {
        activSM.style.display = "flex";
        activBG.classList.add("ns-active")
        nonAct1SM.style.display = "none";
        nonAct1BG.classList.remove("ns-active");
        nonAct2SM.style.display = "none";
        nonAct2BG.classList.remove("ns-active");
    }

    if (e.target.id === navBigExt.id) {

        setNav(navSmallExt, navBigExt, navSmallStyle, navBigStyle, navSmallTreat, navBigTreat)

    } else if (e.target.id === navBigTreat.id) {

        setNav(navSmallTreat, navBigTreat, navSmallExt, navBigExt, navSmallStyle, navBigStyle)

    } else if (e.target.id === navBigStyle.id) {

        setNav(navSmallStyle, navBigStyle, navSmallTreat, navBigTreat, navSmallExt, navBigExt)

    }
}