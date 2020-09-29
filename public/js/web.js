
let id_city;
let city; 
const kostil = "https://cors-anywhere.herokuapp.com";
const realServer = "`https://www.metaweather.com/api/location/search/?query=";
const realWeather = "https://www.metaweather.com/api/location/";

$(() => {
    let sel_city;
    $('#GetID').on('click', () => {
        sel_city = ($('select').val()).toLowerCase();
        console.log(sel_city);
        recive_id_city(sel_city);
    });

    let id_city;
     $('#GetWeather').on('click', () => {
         id_city = $('#inpid').val();
         console.log(id_city);
         recive_weather_city(id_city);
    });
});

function recive_id_city(city) {
    const realServer = `/getidcity/${city}`;
    fetch(realServer)
    .then(response => response.json())
    .then(json => {
       const {woeid} = json;               
 //       const w_id = json.woeid;        /*     res.end(JSON.stringify({woeid}, null, 3));*/
 /************************           res.end(JSON.stringify(woeid, null, 3));*/
 //       const woeid = json;       
 //       console.log(woeid);
        identification.innerHTML = `ID of ${$('select').val()}: ${woeid}`;
    })
    .catch(err => {
        console.error(err);
    });
}

function recive_weather_city(ident) {
    const realWeather = `https://www.metaweather.com/api/location/${ident}/`;
    fetch(`${kostil}/${realWeather}`)
    .then(response => response.json())
    .then(json => {
        let temperature;
        let icon_day = $('.icon');
        let temp_day = $('.temp');
        for(let i=0; i<5; i++) {
            icon_day[i].src = `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[i].weather_state_abbr}.png` ;        
         
            temperature = (json.consolidated_weather[i].the_temp).toFixed(2) ;
            temp_day[i].innerHTML= temperature;
        }
    })
    .catch(err => {
        console.error(err);
    });
}


