import Dictionary from './Dictionary';

export default class View {

  constructor() {
    this.dictionary = new Dictionary();

    this.weatherLocation = document.querySelector('.weather-location');

    this.currentDate = document.querySelector('.date-location');
    this.currentTemperature = document.querySelector('.current-temperature');
    this.feelsLikeTemperature = document.querySelector('.feel-like-temp');
    this.currentIcon = document.querySelector('.current-icon');
    this.currentWindSpeed = document.querySelector('.current-wind-speed');
    this.currentHumidity = document.querySelector('.current-humidity');

    this.forecastDays = document.querySelectorAll('.forecast-day');
    this.forecastIcons = document.querySelectorAll('.forecast-icon');
    this.forecastTemperature = document.querySelectorAll('.forecast-temp');

    this.latitudeDegree = document.querySelector('.lat');
    this.longitudeDegree = document.querySelector('.lng');

    this.labelSummary = document.querySelector('.label-summary');
    this.labelFeelsLike = document.querySelector('.label-feels-like');
    this.labelWind = document.querySelector('.label-wind-speed');
    this.labelWindSpeedUnits = document.querySelector('.label-units-wind-speed');
    this.labelHumidity = document.querySelector('.label-humidity');
    this.labelLatitude = document.querySelector('.label-latitude');
    this.labelLongitude = document.querySelector('.label-longitude');
  }

  renderLabelData(language) {

    const {
      feel,
      wind,
      windSpeedUnits,
      humidity,
      lat,
      long,
    } = this.dictionary;

    this.labelFeelsLike.textContent = feel[language];
    this.labelWind.textContent = wind[language];
    this.labelWindSpeedUnits.textContent = windSpeedUnits[language];
    this.labelHumidity.textContent = humidity[language];
    this.labelLatitude.textContent = lat[language];
    this.labelLongitude.textContent = long[language];
  }

  renderGeoData(data) {

    const {
      country,
      location,
      latitudeDegree,
      longitudeDegree,
    } = data;

    this.weatherLocation.textContent = `${country}, ${location}`;
    this.latitudeDegree.textContent = latitudeDegree;
    this.longitudeDegree.textContent = longitudeDegree;
  }

  renderWeatherData(data, language, units) {

    const {
      summary,
      icon,
      temperature,
      apparentTemperature,
      humidity,
      windSpeed,
      forecastData,
      currentDay,
    } = data;

    this.labelSummary.textContent = summary;
    this.currentIcon.style.backgroundImage = `url(./images/weather/${icon}.png)`;
    this.currentTemperature.innerHTML = `${Math.floor(temperature)} &deg${units}`;
    this.feelsLikeTemperature.innerHTML = `${Math.floor(apparentTemperature)} &deg${units}`;
    this.currentWindSpeed.textContent = windSpeed.toFixed(1);
    this.currentHumidity.textContent = `${humidity * 100}%`;

    forecastData.forEach((item, index) => {
      const { icon, temperatureHigh } = item;
      this.forecastIcons[index].style.backgroundImage = `url(./images/weather/${icon}.png)`;
      this.forecastTemperature[index].innerHTML = `${Math.floor(temperatureHigh)} &deg${units}`;
      this.forecastDays[index].textContent = this.dictionary.daysOfWeek[language][currentDay + index + 2];
    });
  }

}
