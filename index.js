const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', (err, parent_file) => {
    if (err) throw err

    const parentFile = JSON.parse(parent_file)
    sleep.sleep(5)

    fs.readFile(children_file, 'utf8', (err, children_file) => {
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
      }
      console.log(parentFile)
    })
    
  })
  
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
