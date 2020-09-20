const converter = require('./myconverter');
const express = require('express');
const app = express();

app.get('/', (reg, res, next) => {
    res.writeHead(200, {"Content-Type": 'text/plain'});
/*    next('ERROR happened');*/
    next();   
});

app.get('/weather/:woeid_11', (req, res, next) => {
    console.log(`City: ${req.params.woeid_11}`);
    next(); 
});

app.use('/', (req, res, next) => {
    res.end('Hello express!');
});

app.use('/', (err, req, res, next) => {
    res.statusCode = 500;
    res.end(`Something wrong: ${err}`);
});



app.listen(3000);