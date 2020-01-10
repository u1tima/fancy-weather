import Api from './Api';

export default class Weather extends Api {

  constructor() {
    super();
    this.proxy = 'https://cors-anywhere.herokuapp.com/';
    this.api = 'https://api.darksky.net/forecast';
    this.key = '616a4eadc63489694c3962032cefba95';
  }

  async getWeatherByCoords(latitude, longitude, language) {
    const { proxy, api, key } = this;
    const url = `${proxy}${api}/${key}/${latitude},${longitude}?lang=${language}`;
    const data = await this.getJsonData(url);

    const { timezone } = data;
    const forecastData = data.daily.data.slice(1, 4);

    const {
      time,
      summary,
      icon,
      temperature,
      apparentTemperature,
      humidity,
      windSpeed,
    } = data.currently;

    return {
      time,
      timezone,
      summary,
      icon,
      temperature,
      apparentTemperature,
      humidity,
      windSpeed,
      forecastData,
    };
  }
}
