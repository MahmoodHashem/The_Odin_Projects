

import { formatDate, convertTo12HourFormat, getCurrentDateString } from './utils.js'

export function updateWeatherData(data) {

    const $ = {
        cityElement: document.querySelector('[data-city-toShow]'),
        timeElement: document.querySelector('[data-time]'),
        dateElement: document.querySelector('[data-date]'),
        currentTemp: document.querySelector('[data-current-temp]'),
        weatherImage: document.querySelector('[data-weather-icon]'),
        sunriseElement: document.querySelector('[data-sunrise-time]'),
        sunsetElement: document.querySelector('[data-sunset-time]'),
        currentWind: document.querySelector('[data-wind]'),
        currentHumidity: document.querySelector('[data-humidity]'),
        currentPressure: document.querySelector('[data-pressure]'),
        currentUv: document.querySelector('[data-uv]'),
        forecastWeatherImage: document.querySelectorAll('[data-forecast-img]'),
        forecastTemp: document.querySelectorAll('[data-forecast-temp]'),
        forecastDate: document.querySelectorAll('[data-forecast-date]'),
        hourlyImg: document.querySelectorAll('[data-hourly-icon]'),
        hourlyTemp: document.querySelectorAll('[data-hourly-temp]'),
        hourlyWindSpeed: document.querySelectorAll("[data-hourly-windspeed]"),
        hourlyWindDir: document.querySelectorAll('[data-hourly-winddir]'),
        loader: document.querySelector(".loader")
    };

    const { currentConditions, address, days } = data;
    const { temp, feelslike, humidity, windspeed, winddir, pressure, uvindex, sunrise, sunset, conditions, datetime, icon } = currentConditions;


    $.cityElement.innerHTML = address.split(' ')[0];
    $.timeElement.innerHTML = convertTo12HourFormat(data.currentConditions.datetime.slice(0, -3));
    $.dateElement.innerHTML = getCurrentDateString();
    $.currentTemp.innerHTML = `${data.currentConditions.temp}<sup>&deg;C</sup>`;
    displayWeatherIcon(data.currentConditions.icon,$.weatherImage);
    $.sunriseElement.innerHTML = sunrise;
    $.sunsetElement.innerHTML = sunset;
    $.currentWind.innerHTML = windspeed;
    $.currentHumidity.innerHTML = humidity;
    $.currentPressure.innerHTML = pressure;
    $.currentUv.innerHTML = uvindex;


    for (let index = 1; index <= 5; index++) {
        const { temp, datetime, icon } = days[index];
        displayWeatherIcon(icon, $.forecastWeatherImage[index - 1]);
        $.forecastTemp[index - 1].innerHTML = `${temp}&deg;C`
        $.forecastDate[index - 1].innerHTML = formatDate(datetime);
    }

    const desiredHours = [13, 15, 18, 21, 0];
    let hours = data.days[0].hours;

    desiredHours.forEach((hour, index) => {
        const hourData = hours.find((item) => new Date(item.datetimeEpoch * 1000).getHours() === hour);

        if (hourData) {
            displayWeatherIcon(hourData.icon, $.hourlyImg[index]);
            $.hourlyTemp[index].textContent = `${hourData.temp}°C`;
            $.hourlyWindSpeed[index].textContent = `${hourData.windspeed} m/s`;
            $.hourlyWindDir[index].style.transform = `rotate(${hourData.winddir}deg)`;
        } else {
            console.log(`No data found for hour ${hour}:00`);
        }
    });

    $.loader.style.display = 'none'
}


function displayWeatherIcon(icon, imageElement) {
    // Mapping icons to images
    const iconMap = {
        "clear-day": "images/sunny.svg",
        "clear-night": "images/moon.png",
        "partly-cloudy-day": "images/half-cloudy.png",
        "partly-cloudy-night": "images/half-cloudy-night.png",
        "cloudy-day": "images/cloudy.png",
        "cloudy-night": "images/cloudy.png",
        "rain": "images/rainny.png",
        "snow": "images/snowy.png",
        "wind-day": "images/windy.png",
        "wind-night": "images/windy-night.png",
        "thunder": "images/thunder.png",
        "hail": "images/hail.png",
        "tornado": "images/huricane.png",
        "hurricane": "images/huricane.png",

    };
    imageElement.src = iconMap[icon] || iconMap["clear-day"];
}

