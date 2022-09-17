
/* 

Automatic Slideshow (for array of 3 elements)
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
#container > div {position: absolute}
.active          {opacity: 1}
.non-active      {opacity: 0}
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
    active: "",
    nonActive: ";"
}

[arr3]            = array of three HTML Elements (slide containers);
[time]            = overall slideshow time length;
[space]           = time space between slides;
[animationIN/OUT] = animations used when slides are changing;
[animDuration]    = assuming "animationIN" and "animationOUT" both start at the same time and have the same duration time - this is the duration time.
[active]          = class name of the first slide
[nonActive]       = class name of the second and third slide

*/



export function slideshow43(obj){

    const arr3 = obj.arr3;
    const time = obj.time;
    const animDuration = obj.animDuration;
    const space = obj.space;
    const timeInterval = time + 3*animDuration;
    const timeSlide = (time + animDuration)/3;
    const animationIN = obj.animationIN
    const animationOUT = obj.animationOUT
    const active = obj.active
    const nonActive = obj.nonActive

    const a1 = arr3[0]
    const a2 = arr3[1]
    const a3 = arr3[2]

    function runSlideshow(slideTime){

        setTimeout(() => {
            a1.classList.add(animationOUT)
            a3.classList.remove(animationIN)
        }, 0);
        
        setTimeout(() => {
            a2.classList.add(animationIN)           
        }, 0 + space);

        setTimeout(() => {
            a1.classList.remove(animationIN)
            a2.classList.add(animationOUT)
            
            if (a1.classList.contains(active)) {
                a1.classList.remove(active)
                a1.classList.add(nonActive)
            }
        }, slideTime + space);

        setTimeout(() => {          
            a3.classList.add(animationIN)
            a3.classList.remove(animationOUT)
        }, slideTime + 2*space);
    
        setTimeout(() => {
            a3.classList.add(animationOUT)
            a2.classList.remove(animationIN)
            a2.classList.remove(animationOUT)
        }, 2*slideTime + 2*space);
        
        setTimeout(() => {
            a1.classList.add(animationIN)
            a1.classList.remove(animationOUT)            
        }, 2*slideTime + 3*space);
    }

    setTimeout (() => runSlideshow(timeSlide), 0);
    setInterval(() => runSlideshow(timeSlide), timeInterval + 3*space);
}