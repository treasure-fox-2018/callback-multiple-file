const fs = require('fs');
var sleep = require('sleep');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', function (err, parent_file) {
    if (err) throw err

    const parentFile = JSON.parse(parent_file)
    sleep.sleep(5)

    fs.readFile(children_file, 'utf8', function (err, children_file) {
      if (err) throw err

      const childrenFile = JSON.parse(children_file)
      sleep.sleep(5)
      for (let i = 0; i < parentFile.length; i++) {
        var childParent = []
        for (let j = 0; j < childrenFile.length; j++) {
          if (parentFile[i].last_name === childrenFile[j].family) {
            childParent.push(childrenFile[j].full_name)
          }
        }
        parentFile[i].children = childParent
        console.log(parentFile)
      }
    })
    
  })
  
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
