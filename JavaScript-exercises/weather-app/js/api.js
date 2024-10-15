
export async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=VQGFHV4Y7T2NZFJ5AESYFQH7D&contentType=json`);
    if (!response.ok) throw new Error("Failed to fetch weather data");
    
    const data = await response.json();
    return data;
  }
  
  export async function getLocationFromCoordinates(latitude, longitude) {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=922de88fbe4c49ddb01b1ef45072a9b0`);
    if (!response.ok) throw new Error("Failed to fetch location data");
    
    const data = await response.json();
  
    return data.results.length > 0 ? data.results[0].components.city : "Unknown location";
  }