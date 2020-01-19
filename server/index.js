const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./db');
const cors = require('cors');
app.set("port", 3000);

app.use(morgan('dev'));

app.use(express.json());

app.use(cors({origin: 'http://localhost:4200'}));

app.use('/api/business', require('./routes/business.routes'));
app.use('/api/product', require('./routes/product.router'));

app.listen(app.get("port"), () => console.log('Example app listening on port', app.get("port")));