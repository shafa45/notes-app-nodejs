// const fs=require('fs')
// fs.writeFileSync('notes.txt','This is the file created by Node Js')
// fs.appendFileSync('notes.txt','.Node js uses V8 engine to convert javascript into client side runtime')

// const add=require('./utils')

// const sum=add(2,4)

// console.log(sum)

// const validator=require('validator')

// console.log(validator.isEmail('a@hello.com')
// )

// const chalk =require('chalk')

// console.log(chalk.green.bold.inverse("Success!"))

// console.log(yargs.argv)

// const command = process.argv[2]

// if(command=='add')
//     console.log("Adding note!")

// else if(command==='remove')
//     console.log('Removing note!')

// console.log(msg)

const { argv } = require('yargs');
const yargs = require('yargs');

const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Add a title',
      demandOption: 'true',
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: 'true',
      type: 'string',
    },
  },

  handler(argv){
    notes.addNotes(argv.title,argv.body)
    // console.log('Title: ' + argv.title);
    // console.log('Body: ' + argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder:{
    title:{
      describe:"Provide a title to remove it from notes",
      demandOption:'true',
      type:'string'
    }
  
  },
  handler(argv) {
    notes.removeNotes(argv.title)
  },
});

yargs.command({
  command: 'list',
  describe: 'List your notes ',
  handler() {
    notes.listNotes()
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a notes ',
  builder:{
    title:{
      describe:"Provide title to searach for a notes",
      type:"string",
      demandOption:"true",
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
});

yargs.parse();
