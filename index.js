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
  // let parent_data = require('./parents')

  fs.readFile(parent_file, (err, data) => {
    if (err) throw err
    let parent_data = JSON.parse(data)
    sleep(1000)

    fs.readFile(children_file, (err, data) => {
      if (err) throw err
      let children_data = JSON.parse(data)
      sleep(1000)


      for (let i = 0; i < parent_data.length; i++) {
        // let childrenArr = []
        parent_data[i].children = []
        // console.log(parent_data[i])
        // console.log(children_data[i])
        for (let j = 0; j < children_data.length; j++) {

          if (children_data[j].family === parent_data[i].last_name) {
            parent_data[i].children.push(children_data[j].full_name)


          }
        }
        console.log(parent_data)

      }
    }
    )

  }
  )
}





console.log("Notification : Data sedang diproses !");
match_data('./parents.json', './childrens.json')

