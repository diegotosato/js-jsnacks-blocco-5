const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

/*
create empty array
initialize for cycle
isolate single element
single element have to increase
*/

console.log(numbers);


//with for
// const increaseNumbers = []
// for (let i = 0; i < numbers.length; i++) {
//     let thisNumber = numbers[i];
//     thisNumber++
    
//     increaseNumbers.push(thisNumber)
// }

// console.log(increaseNumbers);


//with map
// const increaseNumbers = numbers.map((thisNumber) => {
//     return ++thisNumber
// })
// console.log(increaseNumbers);



//with forEach

numbers.forEach((numb, i, arr)=>{
    arr[i] = ++numb
})