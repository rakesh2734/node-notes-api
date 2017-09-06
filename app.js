const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of a note',
    demand: true,
    alias: 't'
};

var bodyOptions = {
    describe: 'This is a body',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Listing all Notes')
    .command('read', 'Reading a note', {
        title: titleOptions
    })
    .command('remove', 'Removing a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body); 

    if(note){
      console.log('Note Created');
    //console.log('Title: ' + note.title); this is ES5 syntax
    //console.log(`Title: ${note.title}`); This is ES6 syntax
      notes.logNote(note);
    }else {
      console.log('You entered a note title which already exist ');
    }
  
} else if(command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read') {
    var note = notes.readNote(argv.title); //here in var we can use any name like noteRead

    if(note){
        console.log('Note found');
        notes.logNote(note);        
    }else {
        console.log('Note not Found');
    }

} else if(command === 'remove') {
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note Was Removed' : 'Note not found';
   console.log(message);
}
else {
    console.log('Command not recognized');
}