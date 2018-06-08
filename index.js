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

function match_data(parent_file, children_file, callback) {
  // your code here...
  // for (let i = 0; i < parrent.length; i++) {
  //   parrent[i].children = []
  //   console.log(parrent[i])
  //   sleep(5000) // 5sec
  // }
  fs.readFile(parent_file, function(err, dataParent){
    if (err) throw err
    let parentData = JSON.parse(dataParent)
    sleep(1000)
    // callback(parentData);
    fs.readFile(children_file, function(err, dataChildren){
      if(err) throw err
      let childrenData = JSON.parse(dataChildren)
      sleep(1000)
      // callback(childrenData);
      for(let i = 0; i < parentData.length; i++) {
        parentData[i].children = []
        for(let j = 0; j < childrenData.length; j++) {
          if(parentData[i].last_name === childrenData[j].family) {
            parentData[i].children.push(childrenData[j].full_name)
          }
        }
        callback(parentData);
        
      }
      // callback(parentData)
    })
  })
}

console.log("Notification : Data sedang diproses !");
match_data('./parents.json', './childrens.json', function(data){
  // console.log(match_data)
  console.log(data);
  
})
