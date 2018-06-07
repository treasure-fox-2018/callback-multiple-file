const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, (err, data) => {
    sleep.sleep(5)
    if(err) throw err
    var parentsData = JSON.parse(data)
    fs.readFile(children_file, (err, data) => {
      if(err) throw err
      var childrensData = JSON.parse(data)

      for(let i=0; i<parentsData.length; i++){
        let childrens = []
        for(let j=0; j<childrensData.length; j++){
          if(parentsData[i].last_name == childrensData[j].family){
            childrens.push(childrensData[j].full_name)
          }
        }
        parentsData[i].childrens = childrens
      }
      console.log(parentsData)
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
