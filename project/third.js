let Jackets = [
    {
        name: "Fjallraven",
        size: "small",
        sleeveLength: "44",
        armLength: "66",
        color: "white",
    },
    {
        name: "Tarakuka",
        size: "medium",
        sleeveLength: "32",
        armLength: "70",
        color: "black",
    },
    {
        name: "Indemalo",
        size: "large",
        sleeveLength: "12",
        armLength: "90",
        color: "gray",
    },
]
let toAdd = Jackets[0]


abc()
function abc(){
    document.getElementById("checkboxS").checked = true
    document.getElementById("checkboxM").checked = false
    document.getElementById("checkboxL").checked = false
    document.getElementById("checkboxXL").checked = false
    toAdd.size = "small"
}

function def(){
    document.getElementById("checkboxM").checked = true
    document.getElementById("checkboxS").checked = false
    document.getElementById("checkboxL").checked = false
    document.getElementById("checkboxXL").checked = false
    toAdd.size = "medium"
}

function ghi(){
    document.getElementById("checkboxL").checked = true
    document.getElementById("checkboxS").checked = false
    document.getElementById("checkboxM").checked = false
    document.getElementById("checkboxXL").checked = false
    toAdd.size = "large"
}

function jkl(){
    document.getElementById("checkboxXL").checked = true
    document.getElementById("checkboxS").checked = false
    document.getElementById("checkboxM").checked = false
    document.getElementById("checkboxL").checked = false
    toAdd.size = "extraLarge"
}

white()

function white(){
    document.getElementById("checkboxWhite").checked = true
    document.getElementById("checkboxGray").checked = false
    document.getElementById("checkboxlightGray").checked = false
    document.getElementById("checkboxBlack").checked = false
    toAdd.color = "white"
}

function lightGray(){
    document.getElementById("checkboxWhite").checked = false
    document.getElementById("checkboxlightGray").checked = true
    document.getElementById("checkboxGray").checked = false
    document.getElementById("checkboxBlack").checked = false
    toAdd.color = "lightGray"
}

function gray(){
    document.getElementById("checkboxGray").checked = true
    document.getElementById("checkboxWhite").checked = false
    document.getElementById("checkboxlightGray").checked = false
    document.getElementById("checkboxBlack").checked = false
    toAdd.color = "gray"
}

function black(){
    document.getElementById("checkboxGray").checked = false
    document.getElementById("checkboxBlack").checked = true
    document.getElementById("checkboxWhite").checked = false
    document.getElementById("checkboxlightGray").checked = false
    toAdd.color = "black"
}

function showSelectedJacket(){
    if(document.getElementById("selectedJacket").style.display === "block"){
        document.getElementById("selectedJacket").style.display = "none"
    }else{
        document.getElementById("selectedJacket").style.display = "block"
    }
    
}

let flag = 0;

function arrow(x){
    flag = flag + x;
    jacketshow(flag);
}

jacketshow(flag);

function jacketshow(num){
    flag = num
    let jacketDiv = document.getElementsByClassName("jacketDiv");

    if(flag == jacketDiv.length){
        flag = 0;
    }
    if(flag < 0){
        flag = jacketDiv.length -1;
    }
    
    for(let element of jacketDiv){
        element.style.display = "none";
    }
    
    jacketDiv[flag].style.display = "block";
    toAdd = Jackets[flag]
    changeJacketAttributes(flag)

}

function changeJacketAttributes(index){

    document.getElementById("mainTitle").innerHTML = Jackets[index].name
    // Size set kolo da para
    if(Jackets[index].size === "small"){
        abc()
    }else if(Jackets[index].size === "medium"){
        def()
    }else if(Jackets[index].size === "large"){
        ghi()
    }else{
        jkl()
    }
    
    //color set kolo da para
    if(Jackets[index].color === "white"){
        white()
    }else if(Jackets[index].color === "lightGray"){
        lightGray()
    }else if(Jackets[index].color === "gray"){
        gray()
    }else{
        black()
    }

    // sleeve length set kolo da para
    document.getElementById("sleeveLength").value = Jackets[index].sleeveLength
    document.getElementById("sleeveLengthSize").innerHTML = Jackets[index].sleeveLength
    
    // arm length set kolo da para
    document.getElementById("armLength").value = Jackets[index].armLength
    document.getElementById("armLengthSize").innerHTML = Jackets[index].armLength
}

function update(){
    document.getElementById("name").innerHTML = toAdd.name
    document.getElementById("size").innerHTML = toAdd.size
    document.getElementById("color").innerHTML = toAdd.color
    document.getElementById("arm").innerHTML = toAdd.armLength
    document.getElementById("sleeve").innerHTML = toAdd.sleeveLength
}

//  ---- da input range change kolo da para

let sleeveLength = document.getElementById("sleeveLength")
let armLength = document.getElementById("armLength")

sleeveLength.addEventListener("change",((e)=>{
    document.getElementById("sleeveLengthSize").innerHTML = e.target.value
    toAdd.sleeveLength = e.target.value
}))
armLength.addEventListener("change",((e)=>{
    document.getElementById("armLengthSize").innerHTML = e.target.value
    toAdd.armLength = e.target.value
}))































