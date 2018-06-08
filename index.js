const fs = require('fs');
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', function(err, parents_file){
    if(err) {throw err;}
    const parents = JSON.parse(parents_file)
    sleep(1000);
    fs.readFile(children_file, 'utf8', function(err, childrens_file){
      if(err) {throw err;}
      const childrens = JSON.parse(childrens_file)
      sleep(1000);
      for (let i = 0; i < parents.length; i++) {
        var childrenArr = [];
        for (let j = 0; j < childrens.length; j++) {
          if (parents[i].last_name === childrens[j].family) {
            childrenArr.push(childrens[j].full_name);
          }
        }
        parents[i].children = childrenArr;
        console.log(parents);
      }
    })
  })
}
// callback(data);

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");

// const fs = require('fs');
// const parent_file = JSON.parse(fs.readFileSync('parents.json'));
// const children_file = JSON.parse(fs.readFileSync('childrens.json'));
//
// function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//       if ((new Date().getTime() - start) > milliseconds) {
//         break;
//       }
//     }
//   }
//
// function match_data(parent_file, children_file, callback) {
//   for (let i = 0; i < parent_file.length; i++) {
//     var childrenArr = [];
//     for (let j = 0; j < children_file.length; j++) {
//       if (parent_file[i].last_name === children_file[j].family) {
//         childrenArr.push(children_file[j].full_name);
//       }
//     }
//     parent_file[i].children = childrenArr;
//     sleep(500);
//     callback(parent_file)
//   }
// }
//
// match_data(parent_file, children_file, function(parent_file){
//   console.log(parent_file);
//   console.log("Notification : Data sedang diproses !");
// })
