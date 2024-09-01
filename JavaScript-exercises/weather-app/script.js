


const input = document.querySelector('[data-city]');
const form = document.querySelector('form');
const getCurrentLocation = document.querySelector("[data-current-location]");


const city = document.querySelector('[data-city-toShow]');
const time = document.querySelector('[data-time]');
const date = document.querySelector('[data-date]');


const weatherImage = document.querySelector('[data-weather-icon]');


const currentTemp = document.querySelector('[data-current-temp]');
const sunrise = document.querySelector('[data-sunrise-time]');
const sunset = document.querySelector('[data-sunset-time]');


const currentWind = document.querySelector('[data-wind]');
const currentHumidity = document.querySelector('[data-humidity]');
const currentPressure = document.querySelector('[data-pressure]');
const currentUv = document.querySelector('[data-uv]');


const forecastWeatherImage = document.querySelectorAll('[data-forecast-img]');
const forecastTemp = document.querySelectorAll('[data-forecast-temp]');
const forecastDate = document.querySelectorAll('[data-forecast-date]');


const hourlyImg = document.querySelectorAll('[data-hourly-icon]');
const hourlyTemp = document.querySelectorAll('[data-hourly-temp]');
const hourlyWindSpeed = document.querySelectorAll("[data-hourly-windspeed]");
const hourlyWindDir = document.querySelectorAll('[data-hourly-winddir]');


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const data = await getWeather(input.value);
    // console.log(data);
    updateWeatherData(data);
  } catch (error) {

    console.error("Error fetching weather data: " + error.message);
  
  }
});


getCurrentLocation.addEventListener('click', async function () {
  if (navigator.geolocation) {
    try {
      const position = await getCurrentUserPosition();
      const { latitude, longitude } = position.coords;
      const city = await getLocationFromCoordinates(latitude, longitude);
      const data = await getWeather(city);
      updateWeatherData(data);
    } catch (error) {
      console.error("Error getting location or weather data: " + error.message);
    }
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
});


// render(); 


function updateWeatherData(data) {
  city.innerHTML = data.city.split(' ')[0];
  time.innerHTML = convertTo12HourFormat(data.datetime.slice(0, -3));
  date.innerHTML = getCurrentDateString();
  currentTemp.innerHTML = `${data.temp}<sup>&deg;C</sup>
                    <div class="current-weather__temp__feel">Feels Like: ${data.feelslike}&deg;C</div>`;
  sunrise.innerHTML = convertTo12HourFormat(data.sunrise);
  sunset.innerHTML = convertTo12HourFormat(data.sunset);
  displayWeatherIcon(data.icon, weatherImage);
  currentHumidity.innerHTML = `${data.humidity}%`;
  currentPressure.innerHTML = `${data.pressure}hps`;
  currentWind.innerHTML = `${data.windspeed}Km\h`;
  currentUv.innerHTML = data.uvindex;
}

async function getCurrentUserPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
async function getWeather(location) {


  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=VQGFHV4Y7T2NZFJ5AESYFQH7D&contentType=json`);
  const status = response.status; 

  try {
    const data = await response.json();
    // console.log(data.days[0].hours[0])

    const { currentConditions, address, days } = data;
    const { temp, feelslike, humidity, windspeed, winddir, pressure, uvindex, sunrise, sunset, conditions, datetime, icon } = currentConditions;

    for (let index = 1; index <= 5; index++) {
      const { temp, datetime, icon } = days[index];

      displayWeatherIcon(icon, forecastWeatherImage[index - 1]);
      forecastTemp[index - 1].innerHTML = `${temp}&deg;C`
      forecastDate[index - 1].innerHTML = formatDate(datetime);
    }


    const desiredHours = [13, 15, 18, 21, 0];
    let hours = data.days[0].hours; 

    desiredHours.forEach((hour, index) => {
      const hourData = hours.find((item) => new Date(item.datetimeEpoch * 1000).getHours() === hour);
    
      if (hourData) {
        // console.log(hourData)
     
        displayWeatherIcon(hourData.icon, hourlyImg[index]); // Set the icon image source
        hourlyTemp[index].textContent = `${hourData.temp}°C`; // Set the temperature
        hourlyWindSpeed[index].textContent = `${hourData.windspeed} m/s`; // Set the wind speed
        hourlyWindDir[index].style.transform = `rotate(${hourData.winddir}deg)`; // Set the wind direction
      } else {
        console.log(`No data found for hour ${hour}:00`);
      }
    });

    return {
      data, temp, feelslike, humidity, windspeed, winddir, pressure, uvindex, sunrise, sunset, conditions, datetime, city: address, icon
    };
  } catch (error) {
    if(status === 400){
      console.log("NOt found")
    }
    // console.log(error);
    // console.log("Something went wrong");
  }
}




function convertTo12HourFormat(time24) {
  const [hours, minutes] = time24.split(':');
  let hour = parseInt(hours);
  const minute = parseInt(minutes);

  const ampm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12; // The hour '0' should be '12'

  return `${hour}:${minute.toString().padStart(2, '0')} ${ampm}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
}



function getCurrentDateString() {
  const currentDate = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return currentDate.toLocaleDateString('en-US', options);
}



async function render() {
  if (navigator.geolocation) {
    try {
      const position = await getCurrentUserPosition();
      const { latitude, longitude } = position.coords;
      const city = await getLocationFromCoordinates(latitude, longitude);
      const data = await getWeather(city);
      updateWeatherData(data);
    } catch (error) {
      console.error("Error getting location or weather data: " + error.message);
    }
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}



function displayWeatherIcon(weatherIcon, weatherIconImage) {

  switch (weatherIcon) {
    case "clear-day":
      weatherIconImage.src = "images/sunny.svg";
      weatherImage.nextElementSibling.innerHTML = "Sunny"
      break;
    case "clear-night":
      weatherIconImage.src = "images/moon.png"
      weatherImage.nextElementSibling.innerHTML = "Clear Sky"
      break;
    case "partly-cloudy-day":
      weatherIconImage.src = "images/half-cloudy.png";
      weatherImage.nextElementSibling.innerHTML = "Partly Cloudy"
      break;
    case "partly-cloudy-night":
      weatherIconImage.src = "images/half-cloudy-night.png";
      weatherImage.nextElementSibling.innerHTML = "Partly Cloudy"
      break;
    case "cloudy-day" || "cloudy-night":
      weatherIconImage.src = "images/cloudy.png";
      weatherImage.nextElementSibling.innerHTML = "Cloudy"
      break;
    case "rain":
      weatherIconImage.src = "images/rainny.png";
      weatherImage.nextElementSibling.innerHTML = "Rainny"
      break;
    case "snow":
      weatherIconImage.src = "images/snowy.png";
      weatherImage.nextElementSibling.innerHTML = "Snowy"
      break;
    case "wind-day":
      weatherIconImage.src = "images/windy.png";
      weatherImage.nextElementSibling.innerHTML = "Windy"
      break;
    case "wind-night":
      weatherIconImage.src = "images/windy-night.png"; 
      weatherImage.nextElementSibling.innerHTML = "Windy"
    case "thunder":
      weatherIconImage.src = "images/thunder.png";
      weatherImage.nextElementSibling.innerHTML = "Thunder"
      break;
    case "hail":
      weatherIconImage.src = "images/hail.png";
      weatherImage.nextElementSibling.innerHTML = "Haily"
      break;
    case "tornado":
      weatherIconImage.src = "images/huricane.png";
      weatherImage.nextElementSibling.innerHTML = "Tornado"
      break;
    case "hurricane":
      weatherIconImage.src = "images/huricane.png";
      weatherImage.nextElementSibling.innerHTML = "Hurricane"
      break;
    default:
      weatherIconImage.src = "images/sunny.svg";
      weatherImage.nextElementSibling.innerHTML = "Sunny"
      break;
  }
}


async function getLocationFromCoordinates(latitude, longitude) {
  try {
    // Fetch the location data from the geocoding API
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=922de88fbe4c49ddb01b1ef45072a9b0`);
    const data = await response.json();

    // Check if the API response contains a valid result
    if (data.results.length > 0) {
      // Extract the city name from the response
      const cityName = data.results[0].components.city;
      return cityName;
    } else {
      // If no city name is found, return an error message
      return "Unable to determine city name from coordinates";
    }
  } catch (error) {
    // Handle any errors that occurred during the API request
    console.error("Error getting location:", error);
    return "Error getting location";
  }
}