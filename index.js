const fs = require('fs');
var sleep = require('sleep');

let parent_file = './parents.json'
let children_file = './childrens.json'

function match_data() {
    read_file(parent_file, function(parentData) {
        read_file(children_file, function(childData) {
            // loop parent data
            for (let i = 0; i < parentData.length; i++) {
                let parent = parentData[i]
                let childs = []
                // loop childrens with same family name
                for (let j = 0; j < childData.length; j++) {
                    let child = childData[j]
                    let isChildFamily = parent.last_name === child.family

                    if (isChildFamily) {
                        childs.push(child.full_name)
                    }

                    parent.children = childs
                }
            }

            console.log(parentData)
        })
    })
}

function read_file(fileName, callback) {
    let fileData = fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) throw err
          callback(JSON.parse(data))
          sleep.sleep(5)
    })
}

match_data()
console.log("Notification : Data sedang diproses !");
