const fs = require('fs');
var sleep = require('sleep');

const parentfile = './parents.json';
const childfile = './childrens.json';

function match_data(parent_file, children_file) {
  fs.readFile(parentfile, 'utf8', function (err, parent){
    sleep.sleep(5);
    if (err) throw err
    let parent_data = JSON.parse(parent);
    // console.log(parent_data)
  

    fs.readFile(childfile, 'utf8', function (err, children) {
      sleep.sleep(5);
      if (err) throw err;
      let child_data = JSON.parse(children);
      // console.log(child_data)  

      for (let i = 0; i < parent_data.length; i++) {
        let childrenArr = [];
        for (let j = 0; j < child_data.length; j++) {
          if (parent_data[i].last_name === child_data[j].family) {
            childrenArr.push(child_data[j].full_name);
          }
        }
        parent_data[i].children = childrenArr;
      }
      console.log(parent_data);
    });
  });


  

}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
