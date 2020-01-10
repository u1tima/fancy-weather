export default class View {

  constructor() {
    this.weatherLocation = document.querySelector('.weather-location');

    this.currentDate = document.querySelector('.date-location');
    this.currentIcon = document.querySelector('.current-icon');
    this.currentWindSpeed = document.querySelector('.current-wind-speed');
    this.currentHumidity = document.querySelector('.current-humidity');

    this.forecastDays = document.querySelectorAll('.forecast-day');
    this.forecastIcons = document.querySelectorAll('.forecast-icon');

    this.latitudeDegree = document.querySelector('.lat');
    this.longitudeDegree = document.querySelector('.lng');

    this.labelSummary = document.querySelector('.label-summary');
    this.labelFeelsLike = document.querySelector('.label-feels-like');
    this.labelWindSpeed = document.querySelector('.label-wind-speed');
    this.labelUnitsWindSpeed = document.querySelector('.label-units-wind-speed');
    this.labelHumidity = document.querySelector('.label-humidity');
    this.labelLatitude = document.querySelector('.label-latitude');
    this.labelLongitude = document.querySelector('.label-longitude');
  }
}
