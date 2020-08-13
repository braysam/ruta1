const  express = require('express');
const engine = require('ejs-mate');
const path = require('path');

//initialitation
const  app = express();

//settings
app.engine('ejs',engine);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//routes
app.use(require('./routes/'));

//static files
app.use(express.static(path.join(__dirname,'public')));



//starting server
app.listen(3000,()=>{
    console.log('server on port 3000')
});