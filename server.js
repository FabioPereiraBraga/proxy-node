const express = require('express');
const app = express();
const port = 3000;
const routes  = require('./router');



app.set('views', './views');
app.set('view engine', 'pug');




app.use('/', routes);


app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})