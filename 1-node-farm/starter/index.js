const fs = require('fs')


//Blocking , syncronous way
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
//  console.log(textIn);

//  const textOut =`This is the new text about avocado: ${textIn}.\nCreated in ${Date.now()}`;

//  fs.writeFileSync('./txt/output.txt',textOut);
//  console.log("File has been writen.");

//Non-blocking, async
fs.readFile('./txt/start.txt','utf-8', (err,data) => {
    console.log(data)
});
console.log('Will read file!');
