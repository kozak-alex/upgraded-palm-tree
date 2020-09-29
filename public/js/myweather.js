
let id_city;
let city; 
const kostil = "https://cors-anywhere.herokuapp.com";
const realServer = "`https://www.metaweather.com/api/location/search/?query=";
const realWeather = "https://www.metaweather.com/api/location/";

$(() => {
//    let sel_city;
//    $('#GetID').on('click', () => {
//        sel_city = ($('select').val()).toLowerCase();
//        console.log(sel_city);
//        recive_id_city(sel_city);
//    });

//    let id_city;
    let sel_city;    
    $('#GetWeather').on('click', () => {
        sel_city = ($('select').val()).toLowerCase();
//        id_city = $('#inpid').val();
        recive_id_city(sel_city);
    });
});

function recive_id_city(city) {
    const realServer = `/getidcity/${city}`;
    fetch(realServer)
    .then(response => response.json())
    .then(json => {
       const {woeid} = json;               
//       identification.innerHTML = `ID of ${$('select').val()}: ${woeid}`;
        console.log(woeid);
        recive_weather_city(woeid);
    })
    .catch(err => {
        console.error(err);
    });
}       

function recive_weather_city(ident) {
    const realWeather = `/weather/${ident}`;
    fetch(realWeather)
    .then(response => response.json())
    .then(json => {
        let temperature;
        let icon_day = $('.icon');
        let temp_day = $('.temp');
        for(let i=0; i<5; i++) {
            icon_day[i].src = json[i].picture ;        
            temp_day[i].innerHTML= (json[i].temperature).toFixed(2) ;
        }
    })
    .catch(err => {
        console.error(err);
    });
}


