const fs = require('fs');
//var sleep = require('sleep');
function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parents, childrens) {
  
  fs.readFile(parents, 'utf8', function (err, data) {
    if (err) throw err
    console.log("Notification : Data sedang diproses !");
    sleep (5000)
    let arrParents = JSON.parse(data)
    fs.readFile(childrens, 'utf8', function (err, data) {
      if (err) throw err
      console.log("Notification : Data sedang diproses !");
      sleep (5000)
      let arrChildren = JSON.parse(data)
      
      for(let x=0; x<arrParents.length; x++) {
        if(arrParents[x].children === undefined) {
          arrParents[x].children = []
        }
      }

      for(let y=0; y<arrChildren.length; y++) {
        for(let z=0; z<arrParents.length; z++) {
          if(arrChildren[y].family === arrParents[z].last_name) {
            arrParents[z].children.push(arrChildren[y].full_name)
          }
        }
      }

      console.log(arrParents)
    })
  })

}

match_data('./parents.json', './childrens.json')
//console.log("Notification : Data sedang diproses !");
