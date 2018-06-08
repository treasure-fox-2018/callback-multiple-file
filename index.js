const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  console.log('Notification: Data sedang diproses !')
  sleep.sleep(5);
  fs.readFile(parent_file, (err, data) => {
    if (err) throw err;
    let parentData = JSON.parse(data);

    fs.readFile(children_file, (err, data) => {
      sleep.sleep(5);
      if (err) throw err;
      let childData = JSON.parse(data);

      for(let i in childData){
        for (let j in parentData){
          if (childData[i].family == parentData[j].last_name){
            if (!parentData[j].children){
              parentData[j].children = [childData[i].full_name];
            } else {
              parentData[j].children.push(childData[i].full_name);
            }
          }
        }
      }
      callback(parentData)
    });
  });
}

function display(data){
  console.log(data)
}






match_data('./parents.json', './childrens.json', display)
// console.log("Notification : Data sedang diproses !");
