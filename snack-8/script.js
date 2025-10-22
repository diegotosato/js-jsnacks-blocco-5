const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

/*
initialize for cycle
isolate single object "class" key
declare condition
  - if key === 3C -> log key
*/


//with for
for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i];
  if (thisStudent.name === 'Marco Lanci') {
    console.log(thisStudent.class);
  }
}


//with find
const findStudent = students.find((thisStudent) => {
  return thisStudent.name === 'Marco Lanci'
})
console.log(findStudent.class);


//with forEach
students.forEach((student) => {
  if (student.name === 'Marco Lanci') {
    console.log(student.class);
  }
})