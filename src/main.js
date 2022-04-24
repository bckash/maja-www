
// const

const navBigExt = document.getElementById("nav-big-ext");
const navBigTreat = document.getElementById("nav-big-treat");
const navBigStyle = document.getElementById("nav-big-style");

const navSmallTreat = document.getElementById("nav-small-treat");
const navSmallExt = document.getElementById("nav-small-ext");


//EL

navBigExt.addEventListener("click", showContent)
navBigTreat.addEventListener("click", showContent)
navBigStyle.addEventListener("click", showContent)

function showContent (e) {


    if (e.target.id === navBigExt.id) {
        navSmallExt.style.display = "flex"
        navSmallTreat.style.display = "none"
    } else if (e.target.id === navBigTreat.id) {
        navSmallExt.style.display = "none"
        navSmallTreat.style.display = "flex"
    } else if (e.target.id === navBigStyle.id) {
        navSmallExt.style.display = "none"
        navSmallTreat.style.display = "none"
    }
}