// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');

const url = 'https://api.openweathermap.org/data/2.5/weather?appid=d26cadee2be0b0548e24934fba75e01f&q=Maceio&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); 
        displayResults(data);
        displayWindChill();
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const windSpeed = document.querySelector("#wind-speed");

    windSpeed.textContent = weatherData.wind['speed'];

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;


  }


function windChill (temperature, windChill){
	
	return 35.74 + 0.6215*temperature - 35.75*Math.pow(windChill,0.16) + 0.4275*temperature*Math.pow(windChill,0.16)

}

function displayWindChill(){

    const  temperature = parseFloat(document.querySelector("#temperature").innerText)
    const  windSpeed = parseFloat(document.querySelector("#wind-speed").innerText);
    const windChillValue = document.querySelector("#wind-chill");

    if(temperature <= 50 && windSpeed > 3){
        windChillValue.innerText = `${windChill(temperature,windSpeed).toFixed(1)} °F` ;
    } else {
        windChillValue.innerText = "N/A";
    }
}
