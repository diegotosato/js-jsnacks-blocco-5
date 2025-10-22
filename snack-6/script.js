const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

/*
create two empty arrays
initialize for cycle
isolate single object with the key that i want
declare conditions
  - if key > condition -> push into 1st array
  - if key < condition -> push into 2nd array
log the two new arrays
*/


//with for
// const longerZucchines = []
// const shorterZucchines = []

// for (let i = 0; i < zucchine.length; i++) {
//   const thisZucchina = zucchine[i];
//   const zucchinaLenght = zucchine[i].length

//   if (zucchinaLenght >= 15) {
//     longerZucchines.push(thisZucchina)
//   } else {
//     shorterZucchines.push(thisZucchina)
//   }
// }

// console.log(longerZucchines);
// console.log(shorterZucchines);


//with filter
// const longerZucchines = zucchine.filter((thisZucchina) => {
//   return thisZucchina.length >= 15
// })


// const shorterZucchines = zucchine.filter((thisZucchina) => {
//   return thisZucchina.length < 15
// })

// console.log(longerZucchines);
// console.log(shorterZucchines);

//with filter one row
const longerZucchines = zucchine.filter((thisZucchina) => thisZucchina.length >= 15)


const shorterZucchines = zucchine.filter((thisZucchina) => thisZucchina.length < 15)

console.log(longerZucchines);
console.log(shorterZucchines);