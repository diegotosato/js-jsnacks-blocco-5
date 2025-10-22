const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

/*
create empty array
initialize for cycle
isolate single number
declare condition to find only even numbers (% 2 === 0)
push into the empty array
log new array
*/


//with for
// const evenNumbers = []

// for (let i = 0; i < nums.length; i++) {
//     const thisNumber = nums[i];
//     if (thisNumber % 2 === 0){
//         evenNumbers.push(thisNumber)
//     }
// }

// console.log(evenNumbers);


//with filter
// const evenNumbers = nums.filter((thisNumber) => {
//     if (thisNumber % 2 === 0){
//         return true
//     }
//     return false
// })

// console.log(evenNumbers);


//with filter one row
// const evenNumbers = nums.filter((thisNumber) => thisNumber % 2 === 0)
// console.log(evenNumbers);


//with forEach
const evenNumbers = []
nums.forEach((number) => {
    if (number % 2 === 0) {
        evenNumbers.push(number)
    }
})

console.log(evenNumbers);
