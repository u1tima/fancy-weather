import Background from './Background';
import Control from './Control';
import Geo from './Geo';
import Map from './Map';
import View from './View';
import Weather from './Weather';

export default class Application {
  constructor() {
    this.background = new Background();
    this.control = new Control();
    this.geo = new Geo();
    this.map = new Map();
    this.view = new View();
    this.weather = new Weather();

    this.language = localStorage.getItem('language') || 'en';
    this.units = localStorage.getItem('units') || 'si';
    this.coords = { latitude: '', longitude: '' };

    this.geoData = {};
    this.weatherData = {};
  }

  async init() {
    this.view.renderLabelData(this.language);

    const { coords } = await this.geo.getCurrentPosition();
    this.coords = coords;

    this.geoData = await this.geo.getLocationByCoords(this.coords, this.language);
    this.weatherData = await this.weather.getWeatherByCoords(this.coords, this.language, this.units);
    console.log(this.weatherData);

    this.view.renderGeoData(this.geoData);
    this.view.renderWeatherData(this.weatherData);
  }
}
