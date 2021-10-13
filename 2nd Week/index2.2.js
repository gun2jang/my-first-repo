const fs = require('fs')
const path = require('path')
const util = require('util')
const getItem =  util.promisify(fs.readdir)
const findJSFile = async (list, PATH) =>{
    console.log('in')
    list.forEach(async item => {
        if(item.name.isDirectory()){
            await findJSFile(Array.from(getItem(item, {withFileTypes:true})), path.join(PATH, item.name))
        }
        else if(path.extname(path.join(PATH, item.name)) == ".js"){
            console.log(path.join(PATH, item.name))
        }
    })
    return;
}
(async()=>{ 
    try {
        const itemList = Array.from(getItem("./test"))
        console.log(itemList)
        await findJSFile(itemList, "./test")
    } catch (error) {
        console.error(error)}
    }
)();