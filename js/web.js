
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
    const kostil = "https://cors-anywhere.herokuapp.com";
    const realServer = `https://www.metaweather.com/api/location/search/?query=${city}`;
    fetch(`${kostil}/${realServer}`)
    .then(response => response.json())
    .then(json => {
       const {woeid} = json[0];
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
       
        for(let i=0; i<5; i++) {
                  
            icon_day0.src = `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png` ;
            icon_day1.src = `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[1].weather_state_abbr}.png` ;
            icon_day2.src = `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[2].weather_state_abbr}.png` ;
            icon_day3.src = `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[3].weather_state_abbr}.png` ;
            icon_day4.src = `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[4].weather_state_abbr}.png` ;
         
            temperature = (json.consolidated_weather[i].the_temp).toFixed(2) ;          
            $('#my_table tr:nth-child(' + 2 + ')').find('td:nth-child('+(i+1)+')').text(temperature);
        }
    })
    .catch(err => {
        console.error(err);
    });
}


