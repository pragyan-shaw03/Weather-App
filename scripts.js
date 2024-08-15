let apiKey = '08a1e62f81459e1d73374c7aa2b35bc9';
let search = document.querySelector('input');
let city = '';
let api = '';
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', searched);

search.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        searched();
    }
});

function searched() {
    city = search.value;
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=08a1e62f81459e1d73374c7aa2b35bc9`;
    checkWeather();
    search.value = '';
}

async function checkWeather() {
    const response = await fetch(api);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        return;
    }

    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block';
    var data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp.toFixed(0) + '°C';
    document.querySelector('.humidity h3').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind-speed h3').innerHTML = data.wind.speed + ' km/h';
    document.querySelector('.humidity p').innerHTML = 'Humidity';
    document.querySelector('.wind-speed p').innerHTML = 'Wind Speed';
    let mainImg = document.querySelector('.display-weather img');
    mainImg.style = 'display: block';
    if (data.weather[0].main == 'Clouds') {
        mainImg.src = 'images/clouds.png';
    }
    else if (data.weather[0].main == 'Clear') {
        mainImg.src = 'images/clear.png';
    }
    else if (data.weather[0].main == 'Drizzle') {
        mainImg.src = 'images/drizzle.png';
    }
    else if (data.weather[0].main == 'Humidity') {
        mainImg.src = 'images/humidity.png';
    }
    else if (data.weather[0].main == 'Mist') {
        mainImg.src = 'images/mist.png';
    }
    else if (data.weather[0].main == 'Rain') {
        mainImg.src = 'images/rain.png';
    }
    else if (data.weather[0].main == 'Snow') {
        mainImg.src = '/images/snow.png';
    }
    else if (data.weather[0].main == 'Wind') {
        mainImg.src = 'images/wind.png';
    }
    else {
        mainImg.src = 'images/clouds.png';
    }
    console.log(data);
    
}