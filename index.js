const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file, function(err,data){
    if (err) throw err
    let parent_data = JSON.parse(data)
    sleep.sleep(2)
    // console.log(parent_data)

    fs.readFile(children_file, function(err,data){
      if(err) throw err;
      let children_data = JSON.parse(data)
      sleep.sleep(2)
      // console.log(children_data);
      var output = []
      for (let i = 0; i < parent_data.length; i++) {
        let childrensArr = [];
        for (let j = 0; j < children_data.length; j++) {
          if (children_data[j].family === parent_data[i].last_name) {
            childrensArr.push(children_data[j].full_name)
          }
        }
        let newObj = {
          id: i,
          first_name: parent_data[i].first_name,
          last_name: parent_data[i].last_name,
          age: parent_data[i].age,
          children: childrensArr
        }
        output.push(newObj)
      }
      console.log(output);
    })
  })
}

match_data('./parents.json','./childrens.json')
console.log("Notification : Data sedang diproses !");
