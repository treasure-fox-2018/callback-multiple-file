const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file,cb) {
  // your code here...
    fs.readFile(parent_file,'utf8',function(err,dataParent){
        if(err) throw err
        let parentList = JSON.parse(dataParent)
        
        
        fs.readFile(children_file,'utf8',function(err,dataChild){
          let childList = JSON.parse(dataChild)
          // console.log(childList)
       
          sleep.sleep(1)
          // console.log(parentList)
          cb(parentList,childList)
        })
    })
}

function showData(parentList,childList){ 
     for(let i=0;i<parentList.length;i++){
            parentList[i].childrens = []
          }
          for(let i=0;i<parentList.length;i++){
            for(let j=0;j<childList.length;j++){
              if(parentList[i].last_name == childList[j].family){
                parentList[i].childrens.push(childList[j].full_name)
              }
            }
          }
          console.log(parentList)
}


match_data('./parents.json', './childrens.json',showData)
console.log("Notification : Data sedang diproses !");
