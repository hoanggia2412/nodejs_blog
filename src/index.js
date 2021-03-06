const express = require('express');
var methodOverride = require('method-override')
const app = express();
//const morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const port = 3000;

const db = require('./configs/db')
db.connect()
//logger
//app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'))
//Template engine
app.engine(
    'hbs',
         handlebars({
             extname: '.hbs',
             helpers: {
                 sum: (a,b)=>a+b
             }
    }),
);

app.set('view engine', 'hbs');
     app.set('views', path.join(__dirname, './resources/views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
