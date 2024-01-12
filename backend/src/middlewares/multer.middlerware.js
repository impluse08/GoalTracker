import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/temp')
    },
    filename: function (req, file, cb){
        cb(null, file.fieldname)
    }
})

export const upload = multer({ storage })

/*
Here, multer.diskStorage is used to configure the storage engine for uploaded files. The storage object contains two functions:

Here, multer.diskStorage is used to configure the storage engine for uploaded files. The storage object contains two functions:

    destination: This function determines the destination directory where the uploaded files will be stored. In this case, it's set to './public/temp'.

    filename: This function determines the name of the uploaded file. In this example, it's set to the original field name of the file (file.fieldname).
*/