const express = require("express");
const app = express();
const path = require("path");
const { format } = require("path");
const methodOverride = require('method-override');
const session = require("express-session");
const cookies = require('cookie-parser');

const projects = require('./routes/projects');
const about = require('./routes/about');
const index = require('./routes/index');
const contact = require('./routes/contact');

/* MIDDLEWARES DE APP */
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));//Permite capturar info de un formulario via post.
app.use(express.json());
app.use(session({
    secret: "It's a secret",
    resave: false,
    saveUninitialized: false,
}))
app.set('view engine', 'ejs');
app.use(cookies());


/* RUTEADORES */
app.use('/projects', projects);
app.use('/about', about);
app.use('/', index);
app.use('/contact', contact);
app.use((req, res, next) => {
    res.status(404).render("not-found")
});


//CORRIENDO EL SERVIDOR 
app.listen(3001, () => { console.log("----->>>>>   Servidor corriendo en el puerto 3001    <<<<<-----"); });

