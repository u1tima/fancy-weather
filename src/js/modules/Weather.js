import Api from './Api';

export default class Weather extends Api {

  constructor() {
    super();
    this.proxy = 'https://cors-anywhere.herokuapp.com/';
    this.api = 'https://api.darksky.net/forecast';
    this.key = '616a4eadc63489694c3962032cefba95';
  }

  async getWeatherByCoords(coords, language, units) {
    const { proxy, api, key } = this;
    const { latitude, longitude } = coords;
    const tempUnits = (units === 'C') ? 'si' : 'us';
    const url = `${proxy}${api}/${key}/${latitude},${longitude}?lang=${language}&units=${tempUnits}`;
    const data = await this.getJsonData(url);
    console.log(data);

    const weatherData = {
      currentDay: new Date(data.currently.time).getDay(),
      summary: data.currently.summary,
      icon: data.currently.icon,
      temperature: data.currently.temperature,
      apparentTemperature: data.currently.apparentTemperature,
      humidity: data.currently.humidity,
      windSpeed: data.currently.windSpeed,
      forecastData: data.daily.data.slice(1, 4),
    };

    return weatherData;
  }
}
