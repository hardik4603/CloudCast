const apiKey = "a930c7917df51c1ac763471e1859c5ef";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;


checkWeather('dehradun');

document.querySelector('.search-button').addEventListener("click", () => {
    const cityName = document.getElementById('search-box').value;

    checkWeather(cityName);
});


async function checkWeather(cityName) {

    try {

        const response = await fetch(apiUrl+`&q=${cityName}&appid=${apiKey}`);
        let data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " Km/h";
        document.querySelector('.weather-img').src = `images/${data.weather[0].main}.png`;
    }

    catch(err) {
        alert('Enter correct city name');
    }
}


