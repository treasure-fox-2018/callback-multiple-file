const fs = require('fs');
var sleep = require('sleep');
const util = require('util')

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', function(err, parents) {
    if (err) {
      return console.log(err);
    }
    var parentsContainer = JSON.parse(parents);
    sleep.sleep(5);
    fs.readFile(children_file, "utf8", function(err, children) {
      if (err) {
        return console.log(err);
      }
      var childrensContainer = JSON.parse(children);
      sleep.sleep(5);
      for (let i = 0; i < parentsContainer.length; i++) {
        currentParent = parentsContainer[i];
        currentParentLastName = currentParent.last_name;
        arrCurrentChildren = [];
        for (let j = 0; j < childrensContainer.length; j++) {
          if (childrensContainer[j].family === currentParentLastName) {
            arrCurrentChildren.push(childrensContainer[j])
          }
        }
        currentParent.children = arrCurrentChildren
      }
      console.log(util.inspect(parentsContainer, false, null));
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses!");
