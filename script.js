const showValue = document.querySelector(".value")
function runCode() {

    const min = Math.ceil(document.querySelector('.minimo').value)
    const max = Math.floor(document.querySelector('.maximo').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min
    
    showValue.innerHTML = result


}


