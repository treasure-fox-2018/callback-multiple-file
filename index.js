const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  console.log('Notification: Data sedang diproses')
  fs.readFile(parent_file, (err, data) => {
    sleep.sleep(1);
    if (err) throw err;
    let parentData = JSON.parse(data);

    fs.readFile(children_file, (err, data) => {
      sleep.sleep(1);
      if (err) throw err;
      let childData = JSON.parse(data);


    });

  });


}

// function readData(path, callback) {
//   fs.readFile(path, (err, data) => {
//     if (err) throw err;
//     callback(JSON.parse(data));
//   });
// }





match_data('./parents.json', './childrens.json')
// console.log("Notification : Data sedang diproses !");
