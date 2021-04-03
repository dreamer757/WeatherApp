let now = new Date();
let date = document.querySelector("#date");
let time = document.querySelector("#time");
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function city(event) {
  event.preventDefault();
  let enterCity = document.querySelector("#city-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = enterCity.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", city);

function convertTemp(event) {
  event.preventDefault();
  let degree = document.querySelector("#degree");
  degree.innerHTML = "55";
}
function revertTemp(event) {
  event.preventDefault();
  let degree = document.querySelector("#degree");
  degree.innerHTML = "17";
}
let conversion = document.querySelector("#fahrenheit");
conversion.addEventListener("click", convertTemp);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", revertTemp);

function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "f974c4c8ca42b2dd241f29ada920e617";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);
