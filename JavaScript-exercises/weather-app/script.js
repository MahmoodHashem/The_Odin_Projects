

const temp = document.querySelector('[data-current-temp]'); 
const input = document.querySelector('[data-city]'); 
const form = document.querySelector('form'); 


form.addEventListener('submit', function () {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?unitGroup=metric&key=VQGFHV4Y7T2NZFJ5AESYFQH7D&contentType=json`).then(res => res.json()).then(data => {
        temp.innerHTML = data.currentConditions.temp; 
    })
})