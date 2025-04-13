const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors')

dotenv.config();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.DEV_MODE}`.bgMagenta.bgWhite);
});
