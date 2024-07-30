let apiKey = '08a1e62f81459e1d73374c7aa2b35bc9';
let city = 'bangalore';
let api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

async function checkWeather() {
    let response = await fetch(api);
    let data = await response.json();

    console.log(data);
}
checkWeather();