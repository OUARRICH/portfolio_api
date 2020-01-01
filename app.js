const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Portfolio api version 0.1'));

app.use('/api', routes);

app.listen(port, () => console.log('Express App is up and listening on port ', port));
