//obj to string
// var obj = {
//     name:'Rakesh'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


//string to obj
// var personString = '{"name": "Andrew", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

var fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
//Writing the object into a File
fs.writeFileSync('notes.json', originalNoteString );
//Reading the file
var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);
// console.log(originalNote); This is same as an object at the time we were created