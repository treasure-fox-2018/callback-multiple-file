const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', function (err, data) {
    if (err) throw err;
    
    let parent_data = JSON.parse(data);    
    sleep.sleep(5);

    fs.readFile(children_file, 'utf8', function (err, data1) {
      if (err) throw err;
      
      let children_data = JSON.parse(data1)
      sleep.sleep(5);

      for (var i = 0; i <= parent_data.length - 1; i++) {
        var children = [];
        for (var j = 0; j <= children_data.length - 1; j++) {
          if (parent_data[i].last_name === children_data[j].family) {
           children.push(children_data[j].full_name)
          }
        }
        parent_data[i].childrens = children;
      }
      console.log(parent_data)
    });
  });  
  
  // your code here...
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
