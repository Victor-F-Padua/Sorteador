const showValue = document.querySelector(".value")
function runCode() {

    const min = Math.ceil(document.querySelector('.minimo').value)
    const max = Math.floor(document.querySelector('.maximo').value)

   
    
    if(max > min) {
         const result = Math.floor(Math.random() * (max - min + 1)) + min
         showValue.innerHTML = result
        } else {
            alert("The maximum value needs to be higher.")
        }
    

    
}


