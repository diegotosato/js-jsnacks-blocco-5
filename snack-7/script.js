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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

/*
initialize for cycle
isolate single object
declare conditions
  - if object.id === 2 -> log in console
*/


//with for
for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i];
  const studentID = students[i].id

  if (studentID === 2) {
    console.log(thisStudent);
    
  }
}


// //with find
// const findStudent = students.find((thisStudent) => {
//   return thisStudent.id === 2
// })
// console.log(findStudent);


//with find one row
const findStudent = students.find((thisStudent) => thisStudent.id === 2)
console.log(findStudent);


//with forEach
students.forEach((student)=>{
  if (student.id === 2) {
    console.log(student);
  }
})