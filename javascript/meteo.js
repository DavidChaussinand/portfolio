const loader = document.querySelector(".loader-container");
const errorInformation = document.querySelector(".error-information");

async function getWeatherData(){
  try {
    const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=5dfff0f5-926e-4a53-96a7-4b3b615a1f32")

    if(!response.ok) {
      throw new Error(`Error ${response.status}, ${response.statusText}`)
    }

    const responseData = await response.json();
    
    const sortedData = {
      city: responseData.data.city,
      country: responseData.data.country,
      iconId: responseData.data.current.weather.ic,
      temperature: responseData.data.current.weather.tp,
    }

    populateUI(sortedData)
  }
  catch (error) {
    loader.classList.remove("active");
    errorInformation.textContent = error.message;
  }
}


const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const infoIcon = document.querySelector(".info-icon");

function populateUI(data){
  cityName.textContent = data.city;
  temperature.textContent = `${data.temperature}°`;
  infoIcon.src = `ressource/meteo/icons/${data.iconId}.svg`;
  infoIcon.style.width = "50px";
  loader.classList.remove("active");
}


getWeatherData()