// import { sleep } from 'sleep';

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
  fs.readFile(parent_file,(err,data_parent) => {
    if (err) throw err;
    // console.log(data);
    var parentArrObj = JSON.parse(data_parent)
    fs.readFile(children_file,(err, data_child) =>{
      if(err) throw err;
      var childArrObj = JSON.parse(data_child)
      for(var i = 0; i < parentArrObj.length; i++){
        var arrChildren = []
        for(var j = 0; j < childArrObj.length; j++){
          if(parentArrObj[i].last_name === childArrObj[j].family){
            arrChildren.push(childArrObj[j].full_name)
          }
          parentArrObj[i].childre = arrChildren
        }
        sleep(1000)
        console.log(parentArrObj);
        
      }
    })
  })
  // var importParents = fs.readFileSync(parent_file,'utf8')
  // var parent_data = JSON.parse(importParents)

  // var importChil = fs.readFileSync(children_file,'utf8')
  // var child_data = JSON.parse(importChil)

  // for(var i = 0; i < parent_data.length; i++){
  //   var arrChildren = []
  //   for(var j = 0; j < child_data.length; j++){
  //     if(parent_data[i].last_name === child_data[j].family){
  //       arrChildren.push(child_data[j].full_name)
  //     }
  //     parent_data[i].children = arrChildren
  //   }
  // }
  // console.log(parent_data);
  // for(var i = 0; i < parent_data.length; i++){
  //   console.log(parent_data[i]);
  //   sleep(5000)
  
  
}

console.log("Notification : Data sedang diproses !");
console.log(match_data('./parents.json', './childrens.json'))
// console.log(match_data());

