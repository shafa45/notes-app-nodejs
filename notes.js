const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your Notes...';

// ADD NOTES

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  debugger
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log('hurray! notes are added');
  } else {
    console.log('duplicates notes found');
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// REMOVE NOTES

const removeNotes = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  if (notes.length > updatedNotes.length) {
    console.log(chalk.bgGreen('Notes removed !'));
    saveNotes(updatedNotes);
  } else console.log(chalk.bgRed('No Note Found!'));
};

// list Notes

const listNotes = ()=>{
  const notes =loadNotes()
  console.log(chalk.greenBright("Your Notes : "))
  notes.forEach(note => {
    console.log(note.title)
    
  });
}

// READ NOTES

const readNote = (title) =>{
  const notes = loadNotes()
  const noteFound = notes.find(note => note.title === title)
  if(noteFound){

    console.log(chalk.greenBright("Title: "+ noteFound.title ))
    console.log(noteFound.body)
  }
  else
    console.log(chalk.redBright("No Note Found !"))
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote:readNote
};
