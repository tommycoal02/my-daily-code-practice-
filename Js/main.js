document.getElementById('gold').onclick = partyGold
document.getElementById('green').onclick = partyGreen
document.getElementById('lemon').onclick = partyLemon
document.getElementById('grey').onclick = partyGrey


function partyGold() {
    document.querySelector('body').style.backgroundColor = 'rgb(240, 205, 10)'
    document.querySelector('body').style.color = 'black'
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgb(2, 128, 2)'
    document.querySelector('body').style.color = 'white'
}

function partyLemon() {
    document.querySelector('body').style.backgroundColor = 'rgb(178, 209, 178)'
    document.querySelector('body').style.color = 'white'
}

function partyGrey() {
    document.querySelector('body').style.backgroundColor = 'rgb(136, 134, 134)'
    document.querySelector('body').style.color = 'white'
    console.log('we are winners')
}
console.log('we are winners')


// console.log = 'we out here'
// console.log('we are winners')


//////////////////////////////////////////////
// kt7
// (1)
//     Question
//     The national go-kart racing competition is taking place in your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

// Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

// The organizers want a podium that satisfies:

// The first place platform has the minimum height posible
// The second place platform has the closest height to first place
// All platforms have heights greater than zero.
// Task
// Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.
// --------
// answer
// ---------
// function racePodium(blocks) {
//     let first = Math.ceil(blocks/3)+1
//     let second = first -1
//     let third = blocks- second - first
//     if(third == 0){
//       third = 1
//       second -= 1
//     }
//   return [second, first, third]
//   }


// (2)

// (7kyu)
// ========= question===== 
// Time to test your basic knowledge in functions! Return the odds from a list:
// ==== answer ====== 
// function odds(values){
//     // arrow it
//     return values.filter((num) => num % 2 == 1);
//   }


// ===================================

  // function index(array, n){
//     if(n< array.length){
//         for(i=0; i< array.length; i++){
//           if(n==i){
//             return Math.pow(array[i],n);
//           }
//         }
//     }else{
//         return -1;
//     }
// }

// ================ 

// function reverseWords(str) {
//     return str.split("").reverse().join("").split(" ").reverse().join(" ")
//     }
//     console.log(reverseWords('IM THE MAN guyyyyy'))

// ================ 
    
// function createPhoneNumber(n){
//      // let result = numbers.map(i=>Number(i));
//     const result = n.toString().split(',').join("-")
//     return result.toString('')
// }
// console.log(createPhoneNumber('d ri blle'))

// console.log(createPhoneNumber(['1,2,3,4,5,6,7,8,9']))


// =======================

// 8kyu 
// (question) 
// Simple, remove the spaces from the string, then return the resultant string.

// =======
// answer
// =====
// function noSpace(str){
//     return str = str.replace(/\s/g, '');
// }
// console.log(noSpace('sd sddf'))


// ======================================
// question  8kyu
// ----
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// answwer  -----------

// function nearestSq(n){
//     // your code
//   n = Math.round(Math.sqrt(n))
//   return Math.pow(n, 2)
// }
// console.log(nearestSq(33))

// ================



// for removal of space in an array 
// function sumMix(x){
// //    let x = [1,'3','12', 2]
//     let sum = x.reduce(function(a, b) { return a + b; }, 0);
//     console.log(sum)
// }
// sumMix([1,'3','12', 2])


// ================================h ===
// function reverseWords(str) {
//     return str.split("").reverse().join("").split(" ").reverse().join(" ")
//     }
//     console.log(reverseWords('IM THE MAN guyyyyy'))
    
//     function createPhoneNumber(n){
//         // let result = numbers.map(i=>Number(i));
//        const result = n.toString().split(',').join("-")
//         // console.log(result.toString(''))
//         return result
        
//     }
//     console.log(createPhoneNumber(['1,2,3,4,5,6,7,8,9']))


// PREP way of answering questions from today
// fizz buzz
// take in A number is divisible by 5, print from 1 to number. if divisible by 3 fizz, if 5 buzz, if 3 and 5 print fizzz buzz.A


// 1 to num, 3 fizz, 5 buzz , if 5&3 fizzBuzz 
//  Peremeter : Num, positive, whole 



function fizzBuzz(num){
    for(let i=0; i < num.length; i++){
        if(num% 3== 0 && num % 5 == 0){
            console.log("fizBuzz")
        }else if(3% num ==0){
            console.log("fizz")
        }else if(5 % num == 0){
            console.log("buzz")
        }
    }
    // looping through number 
    // conditions 
}
fizzBuzz(15)

// =========================== 
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ). 

// ans 
// function powersOfTwo(n){
// //   list of numbers to be returned 
//   let arr = []
// //   ittrating through the list of non-negative integers
//   for(let i=0; i<= n; i++){
//     arr.push(Math.pow(2,i))
// } 
//   return arr
// }
// ===================================




// Question

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.



// ans 
// ================================= 
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}
console.log(howMuchILoveYou(6))

// function howMuchILoveYou(nbPetals) {
//     let phrase = {    
//       0: "not at all",
//       1: "I love you",
//       2: "a little",
//       3: "a lot",
//       4: "passionately",
//       5: "madly"
//     }
//     return phrase[nbPetals%6]
// }
// howMuchILoveYo

///////////////////////////////////////////////////////////////////

// question 
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// answer

// document.querySelector('h1').addEventListener('click', greet)

// function greet(name){
//     //your code here
//     //   name = document.querySelector('input').value
//     return (`Hello, ${name} how are you doing today?`)
// }
// greet('laye')

////////////////////////////////////////

// question

// answer
function boolToWord( booling){
  //...
  if(booling ){
    return 'Yes'
  }else{
    return 'No'
  }
}
console.log(boolToWord(5))
