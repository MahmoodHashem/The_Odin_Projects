
import { getWeather, getLocationFromCoordinates } from './api.js';
import { getCurrentUserPosition } from './geo.js';
import { updateWeatherData } from './ui.js';

const form = document.querySelector('form');
const input = document.querySelector('[data-city]');
const loader = document.querySelector(".loader");
const errorBox = document.querySelector('.error-box');



form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!navigator.onLine) {
    showError("No internet connection");
    return;
  }
  try {
    loader.style.display = 'block';
    errorBox.style.display = 'none'
    const data = await getWeather(input.value);
    loader.style.display = 'none';
    updateWeatherData(data);
  } catch (error) {
    loader.style.display = 'none';
    showError("Error fetching weather data: " + error.message);
  }
});

async function showCurrentLocationWeather() {
  try {
    
    const position = await getCurrentUserPosition();
    const city = await getLocationFromCoordinates(position.coords.latitude, position.coords.longitude);
    const data = await getWeather(city);
    updateWeatherData(data);
  } catch (error) {
    showError("Error getting location data: " + error.message);
  }
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.style.display = 'block';
}

if (navigator.onLine) {
  window.addEventListener('load', showCurrentLocationWeather);
} else {
  showError("No internet connection");
}