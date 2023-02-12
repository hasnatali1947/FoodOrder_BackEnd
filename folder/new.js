

function button () {
    
    let div = document.createElement("div")
    div.classList.add("div")
    
    let input = document.getElementById("input")
    let inputValue = document.createElement("input")
    inputValue.classList.add("inputValue")
    inputValue.value = input.value
    input.value = ""


    // let div = document.createElement("button")
    // div.classList.add("button")
    
}
// let btn = document.getElementById("button") 
// btn.addEventListener('click', () => {
//     alert('oh,you clicked me!')
// })