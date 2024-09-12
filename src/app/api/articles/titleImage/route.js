const express = require('express');
const {uploadPost} = require('./../../../../multer/articlesMulter');
const app = express();
app.use(express.json());   
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) ; 

app.post('/api/articles/titleImage',uploadPost.single("image"), urlencodedParser, async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log('zzzz',req.file);
    return res.send({'filename': req.file.filename} );
})

app.listen(3002,console.log('connected'));