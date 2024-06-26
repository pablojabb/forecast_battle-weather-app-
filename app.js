const apiKey = "9b31a9a786101c38e14e595c4b403e34";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const searchBox2 = document.querySelector(".search2 input");
const searchBtn2 = document.querySelector(".search-btn2");
const weatherIcon2 = document.querySelector(".weather-icon2");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-details").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "assets/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "assets/snow.png";
    }

    document.querySelector(".weather-details").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});


async function checkWeather2(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error2").style.display = "block";
    document.querySelector(".weather-details2").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city2").innerHTML = data.name;
    document.querySelector(".temp2").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity2").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind2").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon2.src = "assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon2.src = "assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon2.src = "assets/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon2.src = "assets/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon2.src = "assets/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon2.src = "assets/snow.png";
    }

    document.querySelector(".weather-details2").style.display = "block";
    document.querySelector(".error2").style.display = "none";
  }
}

searchBtn2.addEventListener("click", () => {
  checkWeather2(searchBox2.value);
});


