const fs = require('fs');
// var sleep = require('sleep');


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  // your code here...
  const parrent = require('./parents.json') // convert json to array of object
  const childrens = require('./childrens.json')
  let mainArr = []
  for (let i = 0; i < parrent.length; i++) {
    console.log(parrent[i])
    sleep(5000)
  }
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
console.log(match_data)
