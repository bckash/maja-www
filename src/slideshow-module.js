
/* 

Automatic Slideshow (for array of elements)
_____________________________________________

| HTML | 

<div id="container">
    <div id="1" class="active"></div>
    <div id="2" class="non-active"></div>
    <div id="3" class="non-active"></div>
</div>

* * * * * * * * * * * * * * * * * * * * * * *

| CSS  |

--slide-width: ""

#container       {position: relative}
#container > div {position: absolute; opacity: 0}
.animationIN     {animation-name: left-center}
.animationOUT    {animation-name: center-right}

@keyframes left-center {

    from {
       opacity: 0;
       transform: translateX(-(--slide-width));
    } 

    to {
       opacity: 1;
       transform: translateX(0);
    } 
}

@keyframes center-right {

   from {
       opacity: 1;
       transform: translateX(0);
   } 

   to {
       opacity: 0;
       transform: translateX(--slide-width);
   } 
}

* * * * * * * * * * * * * * * * * * * * * * * 

| JS |

const slideShowObject = {
    arr3: "",
    time: "",
    space: "",
    animationIN: "",
    animationOUT: "",
    animDuration: "",
}

slideshow43(slideShowObject)

[arr3]            = array of three HTML Elements (slide containers);
[time]            = overall slideshow time length;
[space]           = time space between slides;
[animationIN/OUT] = animations used when slides are changing;
[animDuration]    = assuming "animationIN" and "animationOUT" both start at the same time and have the same duration time - this is the duration time.

*/



export function slideshow43(obj){

    const arr3 = obj.arr3;
    const animDuration = obj.animDuration;
    const space = obj.space;
    const time = obj.time;
    const timeSlide = (time + animDuration)/3;
    const animationIN = obj.animationIN
    const animationOUT = obj.animationOUT

    let index = -1;

    function runSlideshow(arr, space){

        function addOUTremoveIN (el1, el2) {
            el1.classList.add(animationOUT);
            el2.classList.remove(animationIN);
        }

        function addINremoveOUT (el) {
            el.classList.add(animationIN)           
            el.classList.remove(animationOUT)
        }

        index++
        index === 3 ? index = 0 : index
        let slide1 = arr[index]
        let slide2 = arr[index + 1 === arr.length ? 0 : index + 1]
        let slide3 = arr[index + 2 === arr.length 
            ? 0 : index + 2 === 4
                ? 1 : index + 2]

        setTimeout(() => addOUTremoveIN(slide1, slide3), 0)
        setTimeout(() => addINremoveOUT(slide2), space)

        return index
    }

    setTimeout (() => runSlideshow(arr3, space), 0);
    setInterval(() => runSlideshow(arr3, space), timeSlide + space);
}

