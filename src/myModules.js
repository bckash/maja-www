
export function oneIDOnRestOff(arr, ID, display){
    arr.map( item => {
        item.id === ID 
        ? item.style.display = display
        : item.style.display = "none"
    })
}

export function changeHeightWithWidth(el, parameter1, parameter2){
    let paralaxWidth = el.offsetWidth
    el.style.height = `${paralaxWidth * parameter1 + parameter2}px`
}

export function addRemoveClass (el, add, remove) {
    el.classList.add(add);
    el.classList.remove(remove);
}