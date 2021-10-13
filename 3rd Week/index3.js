const express = require('express')
const app = express()
const port = 3000

const USERNAME = "JGH"
const PASSWORD = "1234"

app.set('views', `${__dirname}/src/views`)
console.log(__dirname)
app.set('view engine', 'pug')

app.get('/', (req, res)=>{
    res.render('index.pug')
})

app.use(express.urlencoded({extended:true}))

app.post('/login', (req, res)=>{
    if(req.body.username==USERNAME && req.body.password == PASSWORD){
        return res.send(`User : ${USERNAME}, Password : ${PASSWORD}`)
    }
    else{
        console.log("wrong information");
    }
    return;
})

app.listen(port, ()=>{console.log(`Server is running on port ${port}`)})