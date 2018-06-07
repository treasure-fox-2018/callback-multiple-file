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
  var parentJson = fs.readFileSync(parent_file,'utf8')
  var parent_data = JSON.parse(parentJson)
  console.log('----loading parent-----');
  // console.log(parent_data);
   
  sleep(5000)

  var childrenJson = fs.readFileSync(children_file,'utf8')
  var children_data = JSON.parse(childrenJson)
  // console.log('----loading child-----');
  // console.log(children_data);

  for (let i = 0; i < parent_data.length; i++) {
    parent_data[i].children = []
    for (let j = 0; j < children_data.length; j++) {
      if (parent_data[i].last_name == children_data[j].family) {
        parent_data[i].children.push(children_data[j].full_name)
      }
    }
  }
  
  console.log(parent_data);
  
  sleep(5000)


}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
