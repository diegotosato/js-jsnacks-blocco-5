const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]
console.log(posts);

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

/*
create empty array
initialize loop cycle
isolate single object with name key
push into empty array
log new array
*/


//with for
// const authorsNames = []

// for (let i = 0; i < posts.length; i++) {
//   const thisAuthor = posts[i].author;
//   authorsNames.push(thisAuthor)
// }

// console.log(authorsNames);


//with map
// const authorsNames = posts.map((thisAuthor) => {
//   return thisAuthor.author
// })

// console.log(authorsNames);


//with forEach
const authorsNames = []
posts.forEach((person)=>{
  authorsNames.push(person.author)
})

console.log(authorsNames);
