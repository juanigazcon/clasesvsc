const express = require('express')
const multer = require('multer')
const app = express()


const server = app.listen(8080, ()=> console.log('Server up'))

let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/img')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname)
    }
})

app.use(express.json())

let uploader = multer ({storage})

//enviar archivos
app.post('/upload', uploader.single('file'), (req,res)=>{
    res.send({message:"ok"})
})