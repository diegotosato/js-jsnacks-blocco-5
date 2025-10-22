const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

/*
initialize for cycle
isolate single element = index of array .name
log element in console
*/

//with for
for (let i = 0; i < people.length; i++) {
  const thisPerson = people[i].name;
  console.log(thisPerson);
}

//with forEach
people.forEach((thisPerson) => {
  thisPerson.name
  console.log(thisPerson.name);
})