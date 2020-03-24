const express = require ('express');
const routes = require('./routes');

const app = express();

// utilizar json no body 
app.use(express.json());
app.use(routes);

app.listen(3333);