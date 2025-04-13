const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const hbs = require('hbs');
const router = require('./routes/index');

dotenv.config();

const staticPath = path.join(__dirname, "public");
const partialsPath = path.join(__dirname, "views/partials");

app.use(express.json());
app.use(express.static(staticPath));

app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use('/', router);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`.bgMagenta.bgWhite);
});
