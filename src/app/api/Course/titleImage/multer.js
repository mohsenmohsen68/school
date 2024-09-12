const multer = require('multer')
let fs = require('fs-extra');
const path = require ('path');
const storage = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            let path = './../../../../../public/img/coursesTitleImage'; 
            fs.mkdirsSync(path);
            cb(null,path)
        },
        filename:(req,file,cb)=>{
            const type = path.extname(file.originalname)
            cb(null, String(Date.now()+type))
        },
    })

    const upload = multer({
        storage:storage,
    })

    module.exports = {upload}