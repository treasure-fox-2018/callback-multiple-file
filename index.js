const fs = require('fs');
//var sleep = require('sleep');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', function(err, data){
    if(err) throw err;

    let parent_data = JSON.parse(data)
    sleep(5000)

    fs.readFile(children_file, 'utf8', function(err, data1){
      let children_data = JSON.parse(data1)
      sleep(2000)

    
      for(let i = 0; i < parent_data.length; i++){
        let children = []
        for(let j = 0; j < children_data.length; j++){
          if(children_data[j].family === parent_data[i].last_name){
            children.push(children_data[j].full_name)
          }
        }
        parent_data[i].childrens = children
      }

      console.log(parent_data)
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
