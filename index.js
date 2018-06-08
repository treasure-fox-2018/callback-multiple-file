'use strict'
const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file,(err,dataParents)=>{
    sleep.sleep(2)
    if(err)throw err;
    var parseParent = JSON.parse(dataParents) 
    fs.readFile(children_file,(err,dataChilds)=>{
      if (err) throw err;
      var parseChildren = JSON.parse(dataChilds)
      for(var i = 0; i<parseParent.length; i++){
        var arrChildren = []
        for(var j= 0 ; j<parseChildren.length; j++){
          if(parseParent[i].last_name === parseChildren[j].family){
            arrChildren.push(parseChildren[j].full_name)
          }
        }
        parseParent[i].children = arrChildren
      }
      console.log(parseParent)
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
