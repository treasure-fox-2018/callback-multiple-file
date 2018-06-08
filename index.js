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
  
  
  fs.readFile(parent_file,'utf8',function (err, parentJson) {
    var parent_data = JSON.parse(parentJson)
    // console.log(parent_data);
    
    sleep(5000)
    fs.readFile(children_file,'utf8',function (err, childrenJson) {
      var children_data = JSON.parse(childrenJson)
      sleep(5000)

      for (let i = 0; i < parent_data.length; i++) {
        parent_data[i].children = []
        for (let j = 0; j < children_data.length; j++) {
          if (parent_data[i].last_name == children_data[j].family) {
            parent_data[i].children.push(children_data[j].full_name)
          }
        }
      }

      console.log(parent_data);
      

    })
  })
  

}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
