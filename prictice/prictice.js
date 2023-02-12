
    // let array = [3,12,2,6,4,8]
    // function reverse(array){
    //     let array2 = []
    //     for(let i=array.length -1;i>=0;i--){
    //         array2 = [...array2 , array[i]]
    //     }
    //     return array2
    // }
    // console.log(reverse(array));

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


//     function vowel(n){
//         if(n == "a" || n == "e" || n == "i" || n == "o" || n == "u" ||  n == "A" || n == "E" || n == "I" || n == "O" || n == "U"){

//             return "this is vovel"
//     }
//     return "this is constant"
//     }
// console.log(vowel("a"));


// let fac = 5
// let number = 1
// function factorial(fac){
//     for(let i=1;i<=fac;i++){
//         number = number * i 
//     }
//     return number
// }
// console.log(factorial(fac));


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

// let array = [2,1,3,4,5,8]
// let smallest = []
// function smallestnumber(array){
    //     for(let i=0;i<=array.length;i++){
        //         smallest = [...smallest , array[array.length -1]]
        //         return smallest
//     }
// }
// console.log(smallestnumber(array));
    

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
