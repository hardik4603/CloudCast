let hardik="https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=06eb996b098f6bf2358a0f9bef5b44ef&units=metric";

// async function getTemp(){
//     let response=await fetch(URL);
//     let data=await response.json();
//     console.log(data);
// }
// getTemp();

let cityName=document.querySelector('.search input');
let btn=document.querySelector('.search button');
let humidityData=document.querySelector('#humid');
let windData=document.querySelector('#winsd');
let temperature=document.querySelector('#temp');
let place=document.querySelector('#cityName');
let visual=document.querySelector('.visual img');

async function updateWeather(city){
    let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06eb996b098f6bf2358a0f9bef5b44ef&units=metric`;
    let response=await fetch(URL);
    let data=await response.json();

    if(response.status===404){
        cityName.value="Delhi";
        updateWeather("Delhi");
        alert("You have either entered wrong city name or we currently don't have the asked city data");
    }

    let data1=Math.floor(data.main.temp);
    temperature.textContent=`${data1}°C`;
    place.textContent=data.name;

    humidityData.textContent=`${data.main.humidity}%`;
    windData.textContent=`${data.wind.speed}km/h`;

    console.log(data);
    let str=data.weather[0].main;
    let newSrc=`./images/${str}.png`;
    visual.src=newSrc;

}

btn.addEventListener('click',()=>{
    // console.log(cityName.value);
    updateWeather(cityName.value);
})

window.addEventListener('load',()=>{
    cityName.value="Delhi";
    updateWeather("Delhi");
})