const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinarypath = require('./../config/cloudinary');

const storage = new CloudinaryStorage({

    cloudinary: cloudinarypath,
    params: {
        folder: 'home-sliders',
        allowed_formats: ['jpg', 'jpeg', 'png'],
        transformation: [{ width: 1200, height: 600, crop: "limit" }]
    }
});

const upload = multer({ storage });

module.exports = upload;
