
// ARRAYS

export function oneOnRestOff(arr, ID, display){
    arr.map( item => {
        item.id === ID 
        ? item.style.display = display
        : item.style.display = "none"
    })
}

export function oneActiveRestNon(arr, ID, cl){
    arr.map( item => {
        item.id === ID 
        ? item.classList.add(cl)
        : item.classList.remove(cl)
    })
}

export function objectValuesToArr (arr) {
    let fillArray = []
    for (const key in arr) {
        fillArray.push(arr[key])
    }
    return fillArray;
}

// ELEMENT

export function changeHeightWithWidth(el, parameter1, parameter2){
    let paralaxWidth = el.offsetWidth
    el.style.height = `${paralaxWidth * parameter1 + parameter2}px`
}

export function addRemoveClass (el, add, remove) {
    el.classList.add(add);
    el.classList.remove(remove);
}


