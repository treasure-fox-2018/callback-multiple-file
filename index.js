const fs = require('fs');
var sleep = require('sleep');


function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file, function (err, dataparents) {
    if (err) {
      throw err
    }
    let dataOrtu = JSON.parse(dataparents)
    fs.readFile(children_file, function (err, datachildrens) {
      if (err) {
        throw err
      }
      let dataChild = JSON.parse(datachildrens)
      for (let i = 0; i < dataOrtu.length; i++) {
        dataOrtu[i].children = []
        for (let j = 0; j < dataChild.length; j++) {
          if (dataOrtu[i].last_name == dataChild[j].family) {
            dataOrtu[i].children.push(dataChild[j].full_name)
          }
        }
      }
      sleep.sleep(5)
      console.log(dataOrtu)
    })
  })
}


match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
