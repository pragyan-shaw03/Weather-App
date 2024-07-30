let apiKey = '08a1e62f81459e1d73374c7aa2b35bc9';
let search = document.querySelector('input');
let city = '';
let api = '';

document.querySelector('.search-icon').addEventListener('click', () => {
    city = search.value;
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=08a1e62f81459e1d73374c7aa2b35bc9`;
    checkWeather();
});

async function checkWeather() {
    const response = await fetch(api);
    var data = await response.json();
    if (!response.ok) {
        return;
    }
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp.toFixed(0) + '°C';

    console.log(data);
    
}