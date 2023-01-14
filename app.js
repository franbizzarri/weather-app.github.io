
const fetchWeather = async (city) => {

    const apiKey = '45b8ee4901fe58a2a8a54aab733ff219';

    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await resp.json();
    const { name } = data;
    const { temp, humidity } = data.main;
    const {icon, description } = data.weather[0];
    const { speed } = data.wind;

    const search = () => {
        fetchWeather(document.querySelector('.search-bar').value);
    }

    document.querySelector('.city').innerHTML = name;
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = `${temp}°C`;
    document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
    document.querySelector('.wind').innerText = `Wind speed: ${speed} Km/h`;
    document.querySelector('.weather').classList.remove('loading');
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";

    //* BUTTON EVENT

    document
    .querySelector('.search-btn')
    .addEventListener('click', buttonEvent = () => search() );

    //* INPUT EVENT

    document
    .querySelector('.search-bar')
    .addEventListener('keyup', inputEvent = (event) => {
        if(event.key === 'Enter'){
            search();
        }
    });

}

fetchWeather('Mendoza');