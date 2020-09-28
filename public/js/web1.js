

$(() => {
    let sel_city;/* = ($('select').val()).toLowerCase();*/
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
   /* const kostil = "https://cors-anywhere.herokuapp.com";
    const realServer = `https://www.metaweather.com/api/location/search/?query=${city}`;
    */
   /* fetch('/web1.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:name_input.value, text: text_input.value})
        })*/
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
    const realWeather = `/weather/${ident}`;
    fetch(realWeather)
    .then(response => response.json())
    .then(json => {
        let icon_day = $('.icon');
        let temp_day = $('.temp');
        for(let i=0; i<5; i++) {
            icon_day[i].src = json[i].picture ;        
            temp_day[i].innerHTML= (json[i].temperature).toFixed(2) ;
            /*  $('#my_table tr:nth-child(' + 2 + ')').find('td:nth-child('+(i+1)+')').text(temperature);   */
        }
    })
    .catch(err => {
        console.error(err);
    });
}



let id_city;
let city; 
const kostil = "https://cors-anywhere.herokuapp.com";
const realServer = "`https://www.metaweather.com/api/location/search/?query=";
const realWeather = "https://www.metaweather.com/api/location/";


/*
 
 const realServer = "https://www.metaweather.com/api/location/44418/";
 fetch(`${kostil}/${realServer}`)
 .then(response => response.json())
 .then(json => {
    temp_day1.innerHTML = json.consolidated_weather[0].the_temp;
    icon_day1.src = `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`
    time.innerHTML = json.time;
 })
 .catch(err => {
     console.error(err);
 });


*/




/*
const city = $(()=>{
    const a=$('select').val();
    return a;
});*/
/*
let city; 
const kostil = "https://cors-anywhere.herokuapp.com";
const realServer = `https://www.metaweather.com/api/location/search/?query=${city}`;
alert('123');
fetch(`${kostil}/${realServer}`)
.then(response => response.json())
.then(json => {
   const {woeid} = json[0];
   identification.innerHTML = `Kiev id ${woeid}`;
})
.catch(err => console.error(err));

*/
