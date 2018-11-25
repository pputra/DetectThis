const Multer = require('multer');
const path = require('path')

module.exports = {
    HandleMultiForm:  Multer({
        fileFilter: (req, file, cb) => {
            const filetypes = /jpeg|jpg|png|pdf/;
            const mimetype = filetypes.test(file.mimetype);
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

            if (mimetype && extname) {
                return cb(null, true);
            }
            cb("Error: File upload only supports the following filetypes - " + filetypes);
        },
        storage: Multer.MemoryStorage,
        limits: {
           fileSize: 5 * 1024 * 1024 
        },
    })
};
