const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const hbs = require('hbs');
const router = require('./routes/index');
const expHbs = require('express-handlebars');

dotenv.config();

const staticPath = path.join(__dirname, "public");
const partialsPath = path.join(__dirname, "views/partials");
const layoutPath = path.join(__dirname, 'views/layouts')

console.log(layoutPath)

app.use(express.json());
app.use(express.static(staticPath));

app.engine('hbs', expHbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: layoutPath,
    partialsDir: partialsPath
}))

app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use('/', router);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`.bgMagenta.bgWhite);
});
