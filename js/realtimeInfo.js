import { getWeatherInfo } from "./weatherAPI.js";

var citySelect = document.getElementById("city-select");
var weatherBox = document.getElementById("weather-box");

citySelect.addEventListener("change", async function () {
    var city = citySelect.value;
    var latitude = citySelect.options[citySelect.selectedIndex].dataset.lat;
    var longitude = citySelect.options[citySelect.selectedIndex].dataset.lon;
    var weatherInfo = await getWeatherInfo(city, latitude, longitude);

    weatherBox.innerHTML = "선택한 도시: " + weatherInfo.city +
        "<br>위도: " + weatherInfo.latitude +
        "<br>경도: " + weatherInfo.longitude;
});
