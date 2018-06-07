const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file, cb) {

  fs.readFile(parent_file, (err, dataParent) => {
    if (err) throw err;

    let parseParent = JSON.parse(dataParent)

    fs.readFile(children_file, (err, dataChild) => {
      if (err) throw err;
      
      let parseChild = JSON.parse(dataChild);
      sleep.sleep(5) //cooldown 5 detik
      cb(parseParent, parseChild);
    });
  });
}

function mixedData(parseParent, parseChildren) {

  for(let i = 0; i < parseParent.length; i++) {
    let arrChild = []
    for(let j = 0; j < parseChildren.length; j++) {
      if(parseParent[i].last_name == parseChildren[j].family) {
        arrChild.push(parseChildren[j].full_name)
      }
    }
    parseParent[i].childrens = arrChild;
    console.log(parseParent[i]);
  }

}

match_data('./parents.json', './childrens.json', mixedData);
console.log("Notification : Data sedang diproses !");