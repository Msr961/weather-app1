let now = new Date();
let footer = document.querySelector("footer");
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Juny",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
footer.innerHTML = `${day}, ${month} ${date},${hours}:${minutes},${year}`;
function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#forecast").innerHTML = response.data.weather[0].main;
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#temp-max").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#temp-min").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#visibility").innerHTML =
    response.data.visibility / 1000;
  document.querySelector("#pressure").innerHTML = response.data.main.pressure;
}
function search(event) {
  event.preventDefault();
  let apiKey = "948345d18988da4ffabaeae2f1891a5f";
  let city = document.querySelector("#city");
  let citySearch = document.querySelector("#query");
  city.innerHTML = citySearch.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(displayWeather);
  console.log(apiUrl);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function convertToFarenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 35;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertToFarenheit);
function convertToCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 10;
}
let celcius = document.querySelector("#celsius-link");
celcius.addEventListener("click", convertToCelcius);
