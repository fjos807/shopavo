const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./db');

app.set("port", 3000);

app.use(morgan('dev'));

app.use(express.json());

app.use(require('./routes/main.routes'));

app.listen(app.get("port"), () => console.log('Example app listening on port', app.get("port")));