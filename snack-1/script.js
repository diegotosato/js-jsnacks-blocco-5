const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

/*
initialize for cycle
isolate single element
log in console the element
*/


//with for
for (let i = 0; i < names.length; i++) {
    const thisName = names[i];
    console.log(thisName);
    
}



//with forEach
names.forEach((name)=>{
    console.log(name);
})