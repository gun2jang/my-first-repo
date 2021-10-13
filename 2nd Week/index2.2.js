const fs = require('fs')
const path = require('path')
const util = require('util')

const getItem =  util.promisify(fs.readdir)
const getStat = util.promisify(fs.stat)

const findJSFile = async (PATH) =>{
    list = Array.from(await getItem(PATH))
    list.forEach(async item => {
        const where = path.join(PATH, item)
        const stat = await getStat(where)
        if(stat.isDirectory()){
            await findJSFile(where)
        }
        else if(path.extname(path.join(PATH, item)) == ".js"){
            console.log(path.join(PATH, item))
        }
    })
    return;
}
(async()=>{ 
    try {
        await findJSFile("./test")
    } catch (error) {
        console.error(error)}
    }
)();