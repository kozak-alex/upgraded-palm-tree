
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
        let date_day = $('.date');
        let icon_day = $('.icon');
        let tmax_day = $('.t_max');
        let tmin_day = $('.t_min');
        let wthdate;
        for(let i=0; i<5; i++) {
            wthdate = converter(json[i].date);
//            console.log(wthdate);
            date_day[i].innerHTML= wthdate;     //json[i].date;
            icon_day[i].src = json[i].picture ;        
            tmax_day[i].innerHTML= " Max:"+(json[i].maxTemperature).toFixed(1)+"&deg;C " ;
            tmin_day[i].innerHTML= " Min:"+(json[i].minTemperature).toFixed(1)+"&deg;C " ;
        }
    })
    .catch(err => {
        console.error(err);
    });
}

function converter(day) {
    let array;
    let str;
    array = day.split('-');
    str = array[2] + " " + month(array[1]);
    return str;
}

function month(mon) {
    let str_month = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return str_month[Number(mon)];
}

