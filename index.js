const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  let parentData = [];
  let childData = [];
  fs.readFile(parent_file, 'utf8',function(err,parentJSON) {
    parentData = JSON.parse(parentJSON);
    sleep.sleep(5);
    fs.readFile(children_file, 'utf8', function (err,childJSON) {
      let childData = JSON.parse(childJSON);
      sleep.sleep(5)
      for (let i = 0 ; i < parentData.length ; i++) {
        let childrensArray = [];
        for (let j = 0 ; j < childData.length ; j++) {
          if ( parentData[i].last_name === childData[j].family) {
            childrensArray.push(childData[j].full_name);
          }
          parentData[i].children = childrensArray;
        }
      }
      console.log(parentData)
    });
  });
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
