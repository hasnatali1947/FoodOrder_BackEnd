
function closed(){
    document.getElementById("popup").style.display = "none"
}
function send(){
    document.getElementById("popup").style.display = "none"
}


function confirm(){
    let email = document.getElementById("email")
    let password = document.getElementById("pass")
    document.getElementById("popup").style.display = "flex"
    document.getElementById("emailText").innerHTML = email.value
    document.getElementById("passwordText").innerHTML = password.value
}