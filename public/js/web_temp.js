function sendServerRequest() {
   return new Promise((resolve, reject) => {
       // step 1
       const xhr = new XMLHttpRequest();

       // step 2.1
       xhr.onreadystatechange = () => {
           if (xhr.readyState === 4 && xhr.status === 200) {
               resolve(xhr.responseText);
           } else if (xhr.readyState === 4 && xhr.status !== 200) {
               reject(xhr.status);
           }
       }

       // step 2.2
       const city = "london"
       const kostil = "https://cors-anywhere.herokuapp.com";
       const realServer = `https://www.metaweather.com/api/location/search/?query=${city}`;
       xhr.open('GET', `${kostil}/${realServer}`);

       // step 3
       xhr.send();
   });
}

sendServerRequest()
.then(responseText => JSON.parse(responseText))
.then(json => {
   const { woeid, latt_long } = json[0];
   txt.innerHTML = `London id is <b>${woeid}</b> and coordiantes: <i>${latt_long}</i>`
})
.catch(err => {
   console.error(err);
})

const kostil = "https://cors-anywhere.herokuapp.com";
const realServer = "https://www.metaweather.com/api/location/44418/";
fetch(`${kostil}/${realServer}`)
.then(response => response.json())
.then(json => {
   weather.innerHTML = json.consolidated_weather[0].the_temp;
   icon.src = `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`
   time.innerHTML = json.time;
})
.catch(err => console.error(err));

/*

$(function() {
   $('.otherhtml').load('index.html #coolform');
   $.get(`${kostil}/${realServer}`, data => {
       $('#jqweather').html(data.consolidated_weather[0].the_temp);
   }, 'json')
   $.getJSON(`${kostil}/${realServer}`, data => {
       console.log(data.consolidated_weather[0].the_temp);
   })
})

*/