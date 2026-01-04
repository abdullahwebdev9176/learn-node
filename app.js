const express = require('express');
const app = express();
const dotenv = require('dotenv');
const hbs = require('hbs');
const path = require('path');
const frontendRoutes = require('./routes/index');
const hbsHelpers = require('./helpers/hbs-helpers');
const { engine } = require('express-handlebars');

dotenv.config();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '/public');
const viewsPath = path.join(__dirname, 'views');               
const frontendPagesPath = path.join(viewsPath, 'frontend-pages'); 
const partialsPath = path.join(viewsPath, 'partials');
const layoutsPath = path.join(viewsPath, 'layouts');

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'layout',        
    layoutsDir: layoutsPath,
    partialsDir: partialsPath,
    helpers: hbsHelpers       
}));

app.set('view engine', 'hbs');
app.set('views', frontendPagesPath);


app.use(express.static(staticPath));
app.use('/', frontendRoutes);


app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});
