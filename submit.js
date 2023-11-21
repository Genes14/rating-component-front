
let form = document.querySelector("#rate-form")
console.log(form)
form.addEventListener("submit", function(event){
    event.preventDefault();
    let selected = document.querySelector(`input[name="opciones"]:checked`)
    if(selected){
        console.log("opcion: " + selected.value)
        let subContainer = document.querySelector(".sub-container")
        subContainer.style.display ="none"
        let subContainer2 = document.querySelector(".sub-container2")
        subContainer2.style.display ="flex"
        let pSelection = document.querySelector(".selection")
        pSelection.innerHTML = `You selected ${selected.value} out of 5`
       
        console.log()
    } else {
        alert("Por favor elige una calificación")
    }
})