const loadData = (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8dadb63d62622ff55d7d8441a3d5ffc&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}
const displayWeather = weather => {
    console.log(weather);
    document.getElementById('city-name').innerText = weather.name;
    document.getElementById('temp').innerText = weather.main.temp;
    document.getElementById('condition').innerText = weather.weather[0].main;
}

loadData('Dhaka');
