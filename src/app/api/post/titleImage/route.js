const express = require('express');
const { upload } = require('./multer');
const app = express();
app.use(express.json());
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
console.log("hi there ,...")
app.post('/api/post/titleImage', upload.single("image"), urlencodedParser, async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.send({ 'filename': req.file.filename });
})

app.listen(3004, console.log('connected'));