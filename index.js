const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file, 'utf8', (err, parents) => {
    if (err) throw err
    let parentsData = JSON.parse(parents)
    fs.readFile(children_file, 'utf8', (err, children) => {
      if (err) throw err
      sleep.sleep(5)

      let childrenData = JSON.parse(children)
      loop(parentsData, childrenData, (matchedData) => {
        console.log(matchedData)
      })
    })
  })
}

function loop(parentsData, childrenData, callback) {
  for (let i = 0; i < parentsData.length; i++) {
    let parent = parentsData[i]
    parent['children'] = []
    for (let j = 0; j < childrenData.length; j++) {
      let children = childrenData[j]
      if (children.family === parent.last_name) {
        parent['children'].push(children.full_name)
      }
    }
  }
  callback(parentsData)
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");