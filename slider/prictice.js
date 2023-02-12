

let flag = 1;

function controller(x){
    flag = flag + x
    slider(flag)
}

slider(flag)
function slider(num){
    
    let img = document.getElementsByClassName("img2")
    
    
    for(let i=0;i<img.length;i++){
        flag = num

        if(flag > img.length -1){
            flag = 0
            num = 0
    }
    if(flag < 0){
        flag = img.length -1 
        num = img.length -1
    }

    }

    for(y of img){
        y.style.display = "none"
        console.log(y);
    }
   
    img[num].style.display = "block"
}
    
// let form = document.getElementById("form")
// form.addEventListener("click" ((e)=>{
    

//     let input = document.getElementById("input")
//     document.getElementById("h2").innerHTML = input.value
//     input.value = ""
// }))
































// let flag = 1
// function controller(x){
// flag = flag + 1
// slider(flag)
// }
// slider(flag)

// function slider(num){
    // let img = document.getElementsByClassName("img")
    
//     for(let y of img){
//         y.style.display = "none"
//     }

//     for(let i=0;i<=img.length;i++){
//         if(num == img.length){
//             flag = 0
//             num = 0
//         }
//     if(num < 0){
//         flag = img.length
//         num = img.length
//     }
//     }
   
    // img[num].style.display = "block"
// console.log(img);

// }
