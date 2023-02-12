
    // let array = [3,12,2,6,4,8]
    // function reverse(array){
    //     let array2 = []
    //     for(let i=array.length -1;i>=0;i--){
    //         array2 = [...array2 , array[i]]
    //     }
    //     return array2
    // }
    // console.log(reverse(array));

//////////////////////////////////////////////////////////////////////////////////

    // let array = ["arsalan" , "hasnat" , "huzaifa" , "shayan" , "shah fahad"]
    // let checkfrequency = ["shah fahad"]
    // let number = 0
    // function frequency(checkfrequency){
    //     for(let i=0;i<=array.length;i++){
    //         if(checkfrequency == array[i]){
    //             number++
    //         }
    //     }
    //     return number
    // }
    // console.log(frequency(checkfrequency));

/////////////////////////////////////////////////////////////////////////////////////////////

    // let array = [2,1,55,333,54,7]
    // let number = 0
    // function largestnumber(array){
    //     for(let i=0;i<=array.length;i++){
        //         if(number < array[i]){
            //             number = array[i]
    //         }
    //     }
    //     return number
    // }
    // console.log(largestnumber(array));
    
    // function primenumber(n){
    //     let isprime = true
    //     for(let i=2;i < n;i++){
    //         if(n % i == 0){
    //             isprime = false
    //         }
    //         if(isprime){
    //             return "this is prime number"
    //         }else{

    //             return "this is not prime number"
    //         }
    //     }
    // }
    // console.log(primenumber(23));

///////////////////////////////////////////////////////////////////////////////////////////////

//     function vowel(n){
//         if(n == "a" || n == "e" || n == "i" || n == "o" || n == "u" ||  n == "A" || n == "E" || n == "I" || n == "O" || n == "U"){

//             return "this is vovel"
//     }
//     return "this is constant"
//     }
// console.log(vowel("a"));

/////////////////////////////////////////////////////////////////////

// let fac = 5
// let number = 1
// function factorial(fac){
//     for(let i=1;i<=fac;i++){
//         number = number * i 
//     }
//     return number
// }
// console.log(factorial(fac));

/////////////////////////////////////////////////////////////////////

// let array = [2,1,3,45,77,55,43,32,66,90,4]
// let number = []
// function table(array){
//     for(let i=0;i<=array.length -1;i++){

//         if(array[i] % 2 != 0){
//             number = [...number , array[i]]
//         }
//     }
//     return number
// }
// console.log(table(array));

/////////////////////////////////////////////////////////////////////

// let array = [2,1,3,4,5,8]
// let smallest = []
// function smallestnumber(array){
    //     for(let i=0;i<=array.length;i++){
        //         smallest = [...smallest , array[array.length -1]]
        //         return smallest
//     }
// }
// console.log(smallestnumber(array));
    
/////////////////////////////////////////////////////////////////////

//     let array = [3,3,1,2,2,4]
//     let array2 = []
//     function common(array , array2){
//     for(let i=0;i < array.length;i++){
//         let boolean = true

//         for(let j=0;j<array2.length;j++){
//             if(array[i] == array2[j]){
//                 boolean = false
//             }
//         }
//             if(boolean == true){
//                 array2 = [...array2 , array[i]]
//             }
//     }
//     return array2
// }
// console.log(common(array,array2));

/////////////////////////////////////////////////////////////////////

// let array = [2,1,3,4,5,9,7]
// let number = []
// let index = 0
// function split(array){
//     for(let i=0;i<=array.length;i++){
//         if(array[i] == array[i]){
//             number[index] = "," 
//             index++ 
//             number[index] = array[i] 
//             index++

//         }else{
//             number[index] = array[i] 
//             index++
//         }
//     }
//     return number
// }
// console.log(split(array));

/////////////////////////////////////////////////////////////////////

// let string = "12321"
// function isplindrom(string){
// let mid = string.length/2
// let left = 0
// let right = 0

// if(string.length % 2 == 0){
//         left = mid - 1
//         right = mid
//     }else{
//         left = mid - 1.5 
//         right = mid + 0.5
//     }
//     let plindrom = true
//     for(let i=0;i<string.length;i++){
//         if(string[left] != string[right]){
//         plindrom = false
//         }
//         left--
//         right++
//     }
//     return plindrom
//}
// console.log(isplindrom(string));

/////////////////////////////////////////////////////////////////////

// let array = [2,1,3,4,5,8,7]
// let array2 = []
// function lastnumber(){
//     for(let i=0;i<=array.length;i++){
//     if(array[i] == array[array.length -1]){
//         array2 = [...array2 , array[i]]
//     }    
//     }
//     return array2
// }
// console.log(lastnumber());
 
// let array = [3,1,3,77,5,9]
// let array2 = []
// function firstlast(array , array2){
//    array2 = [array[0] , array[array.length -1]]
//    return array2 
// }
// console.log(firstlast(array , array2));

/////////////////////////////////////////////////////////////////////

// let array = [2,1,7,3]
// let array2 = []
// function sum(array){
//     for(let i=0;i<=array.length;i++){
//     for(let j=i + 1;j<=array.length;j++){
//         if(array[i] + array[j] == 9){
//             return [i , j]
//         }
//     }
//     }
//     return "false"
// }   
// console.log(sum(array));

///////////////////////////////////////////////////////////////////

// let array = [2,3,2,3]
// let array2 = []
// function addOne(array){
//     for(let i=0;i<array.length;i++){
//     array2 = [...array2 , array[i] + 1]
//     }
//     return array2
// }
// console.log(addOne(array));

//////////////////////////////////////////////////////////////////////////

// let array = [2,1,1,4,3,4,7,9,8,7]
// let array2 = []
// function removeelement(array , array2){
//     for(let i=0;i<=array.length;i++){
//         let boolean = true
//         for(let j=0;j<=array2.length;j++){
//             if(array[i] == array2[j]){
//                 boolean = false
//             }
//         }
//         if(boolean == true){
//             array2 = [...array2 ,array[i] ]
//         }
//     }
//     return array2
// }
//     console.log(removeelement(array , array2));

/////////////////////////////////////////////////////////////////////

// let ages = [2,11,1,3,4,7,6]
// function checkadult(ages){
//     return ages >=3
// }
// console.log(ages.filter(checkadult));

/////////////////////////////////////////////////////////////////////////

// let array = [2,1,3,6,5,8,9,7]
// function sorting(array){
//     let temparray = array
//     for(let i=0;i<=temparray.length;i++){
//     for(let j=i + 1;j<=temparray.length;j++){
   
//         if(temparray[i] > temparray[j]){

//         let temp = array[i]       
//             array[i] = array[j]     
//             array[j] = temp         
//         }   
//     }
//     }
//     return temparray
// }
// console.log(sorting(array));

////////////////////////////////////////////////////////////////////////////////

// let array = [2,9,1,9,4,6,4,9,0 ]
// let mixnumber = 0
// let howmuch = 0
// function countmixnumber(array , mixnumber){
//     for(let i=0;i<array.length;i++){
//         if(mixnumber < array[i]){
//             mixnumber = array[i]
//         }
//         howmuch = 0
//         for(let i=0;i<=array.length;i++){
//             if(mixnumber == array[i]){
//                 howmuch++
//         }
//         }
// }
//     return howmuch
// }
// console.log(countmixnumber(array , mixnumber));

////////////////////////////////////////////////////////////////////////////////

// let array = [1,0,1,-1,-1]
// let positive = 0
// let nagtive = 0
// let zero = 0
// let positiveValue = 0
// let nagitiveValue = 0
// let zeroValue = 0
// function abc(array){
//     for(let i=0;i<=array.length;i++){
//         if(array[i] > 0){
//         positive++
//         }else if(0 == array[i]){
//             zero++
//         }else if(0 > array[i]){
//             nagtive++
//         }
//        positiveValue = (positive/array.length).toFixed(6)
//        nagitiveValue = (nagtive/array.length).toFixed(6)
//        zeroValue = (zero/array.length).toFixed(6)
//     }   
// return [positiveValue , nagitiveValue , zeroValue]
// }
// console.log(abc(array));

//////////////////////////////////////////////////////////////////////

// let string = "10"
// function isplindrom(string){
//     let mid = string.length/2
//     let left = 0
//     let right = 0
//     if(string.length % 2 == 0){
//         left = mid -1
//         right = mid
//     }else{
//         left = mid -1.5
//         right = mid + 0.5
//     }
//     let plindrom = true
//     for(let i=0;i<=string.length;i++){
//         if(string[left] != string[right]){
//             plindrom = false
//         }
//         left--
//         right++
//     }
//     return plindrom
// }
// console.log(isplindrom(string));

/////////////////////////////////////////////////////////////////////////

// let string = "this is moon"
// a = 0
// function lastword(string){
//     let word = string.trim().split(" ")
//     a = word[word.length -1].length
//     return a
//     }
// console.log(lastword(string));

///////////////////////////////////////////////////////////////////////

// let height = [1,3,4,0]
// let maximumHeight = 0
// let doses = 1
// let drinkdoses = 0
// function dose(){
//     for(let i=0;i<=height.length;i++){
//         if(maximumHeight < height[i]){
//             maximumHeight = height[i]
//         }
//         drinkdoses = maximumHeight - doses
//             if(drinkdoses < 0){
    //                 return 0
    //             }
//         }
//         return drinkdoses
//     }
// console.log(dose());

////////////////////////////////////////////////////////////////////////

// let b = 60
// let keyboard = [3 ,4, 8]
// let usb = [5 , 1 , 55]
// let price = -1
// function spentmoney(b , keyboard , usb){
//     for(let k=0;k<keyboard.length;k++){
//     for(let u=0;u<usb.length;u++){
    
//     if(keyboard[k] + usb[u] > price && keyboard[k] + usb[u] <= b){
//         price =  keyboard[k] + usb[u]
//     }
//     }
//     }
//     return price
//     }

// console.log(spentmoney(b , keyboard , usb));

//////////////////////////////////////////////////////////////////////////

// let string = "123321"
// let string2 = 0
// function isplindrom(){
//     let Boolean = false
//         string2 = string.split("").reverse().join("")
//         if(string === string2){
//         Boolean = true
//     }
//     return Boolean
//     }
// console.log(isplindrom());

//////////////////////////////////////////////////////////////////////////

// let ali = [2,2,3]
// let ahmad = [1,3,4]
// let points = [0 , 0]
// function compare(){
//     for(i=0;i<=3 -1;i++){
//     if(ali[i] > ahmad[i]){
//         points[0]++
//     }
//     else if(ali[i] < ahmad[i]){
//         points[1]++
//     }
// }
// return points
// }
// console.log(compare());

/////////////////////////////////////////////////////////////////////////////////

// let appletree = 4
// let orangetree = 12
// apples = [2,3,-1]
// oranges = [3,-2,-4]
// let houseleft = 7 
// let houseright = 10
// appleinhome = 0
// orangeinhome = 0 

// function fallfruits(){
//     for(let i=0;i<apples.length;i++){
//         if(appletree + apples[i] >= houseleft && appletree + apples[i] <= houseright){
//             appleinhome++

//     for(let i=0;i<oranges.length;i++){
//         if(orangetree + oranges[i] >= houseleft && orangetree + oranges[i] <= houseright){
//             orangeinhome++
//         }
//         }        
//     }
// }
// return [appleinhome , orangeinhome]
// }
// console.log(fallfruits());

///////////////////////////////////////////////////////////////////////////////////////

// let array = [1,2,3,4,5,10]
// for(let i=0;i<array.length;i++)
// console.log(array.indexOf(1));

// let u = 1
// let d = -1
// let steps = [d,d,u,u,u,u,d,d]
// let viewvalley = 0
// let path = 0

// function countingvalleys(){
//     for(let i=0;i<steps;i++){

//         if(steps[i] == u){
//             path++
//         if(path == 0){
//             viewvalley++
//         }
//         }
//     else{
//             path--
//     }        
//         }
//         return viewvalley
//     }
// console.log(countingvalleys());

// let string = "this is world "
// let lastword = 0
// let a = 0
// for(let i=0; i< string.length ;i++){
//     a = string.trim().split(" ")
//     lastword = a[a.length -1].length 
// }
// console.log(lastword);


let form = document.getElementById("form")
form.addEventListener("click" , ((e)=>{
    e.preventDefault()

   let input =  document.getElementById("input")
   document.getElementById("h2").innerHTML = input.value
    input.value = ""
}))


