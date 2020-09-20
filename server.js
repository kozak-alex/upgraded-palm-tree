const converter = require('./myconverter');
const express = require('express');         /* npm install express */
const bodyParse = require('body-parser');   /* npm install body-parser */
const fetch = require('node-fetch');   /* npm i node-fetch */
const { response } = require('express');
const app = express();

app.use(express.static('public'));


app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

/* localhost:3000/calc
calc-grid.html */
app.get('/calc',(req, res, next) => {
    res.sendFile(`${__dirname}/public/calc-grid.html`);
});

app.post('/web1.html', (req, res, next) => {
   /* res.writeHead(200, {"Content-Type": "text/plain"});*/
   /* res.send('Your form had: \n');*/
    console.log(req.body);
    res.end(JSON.stringify(req.body, null, 4)); /**????????????????? */
});

app.get('/weather/:woeid', (req, res, next) => {
    fetch(`https://www.metaweather.com/api/location/${req.params.woeid}/`)
    .then(response => response.json())
    .then(json => {
        const array=[];
        json.consolidated_weather.forEach( element => {
            array.push({
                temperature: element.the_temp,
                pictute: `https://www.metaweather.com/static/img/weather/png/64/${element.weather_state_abbr}.png`
            })
        });
        res.end(JSON.stringify(array, null, 3));
    });
});

/*

app.get('/weather/:woeid', (req, res, next) => {
    fetch(`https://www.metaweather.com/api/location/${req.params.woeid}/`)
    .then(response => response.json())
    .then(json => {
        const temp = json.consolidated_weather[0].the_temp;
        const pict = `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`;
        const r = {
            temperature: temp,
            picture: pict
            }
            res.end(JSON.stringify(r, null, 10));
    });

});
*/

/*
app.get('/weather/:woeid_11', (req, res, next) => {
    console.log(`City: ${req.params.woeid_11}`);
    
});
*/
/*
app.use('/', (req, res, next) => {
    res.end('Hello express!');
});
*/


app.use('/', (err, req, res, next) => {
    res.statusCode = 500;
    res.end(`Something wrong: ${err}`);
});



app.listen(3000);