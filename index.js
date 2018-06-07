const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  //parent file
  fs.readFile(parent_file,'utf8',(err,dataParents)=>{
    if(err) throw err
    var parentList = JSON.parse(dataParents)
    
    //childern file
    fs.readFile(children_file,'utf8',(err,dataChildern)=>{
      if(err) throw err
      var childernList = JSON.parse(dataChildern)
      
      for(let i = 0; i < parentList.length; i++){
        var arrChildern = []
        for(let j = 0; j < childernList.length; j++){
          if(parentList[i].last_name==childernList[j].family){
            arrChildern.push(childernList[j].full_name)
          }
        }
        parentList[i].children = arrChildern
      }
      for(let k = 0; k < parentList.length;k++){
        sleep.sleep(1)
        console.log(parentList[k]);
      } 
    })
  })
  
}


match_data('./parents.json', './childrens.json')

console.log("Notification : Data sedang diproses !");
