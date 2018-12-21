//Require fs module
const fs = require('fs');

const file = 'data.txt'; //This is the .txt file that contains the text files.

fs.readFile(file, 'utf8', (err, data) => {
  let work;

  work = data.split(`\n`).map(function (el) {
    return el.split(/\s+/);
  });

  const headings = work.shift();

  const obj = work.map(function (el) {
    let obj = {};
    for (var i = 0, l = el.length; i < l; i++) {
      obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
    }
    return obj;
  });


  //Converts the json to a string
  const json = JSON.stringify(obj);
  //Write it to another file 
  fs.writeFile('work.txt', json, (err, data) =>
    console.log('Yea'))

})
