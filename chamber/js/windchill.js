function windChill (temperature, windChill){
	
	return 35.74 + 0.6215*temperature - 35.75*Math.pow(windChill,0.16) + 0.4275*temperature*Math.pow(windChill,0.16)

}

const  temperature = parseFloat(document.querySelector("#temperature").innerText)
const windSpeed = parseFloat(document.querySelector("#wind-speed").innerText);
const windChillValue = document.querySelector("#wind-chill");

if(temperature <= 50 && windSpeed > 3){
    windChillValue.innerText = `${windChill(temperature,windSpeed).toFixed(1)} °F` ;
} else {
    windChillValue.innerText = "N/A";
}
