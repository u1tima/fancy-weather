import Api from './Api';

export default class Geo extends Api {

  constructor() {
    super();
    this.api = 'https://api.opencagedata.com/geocode/v1/json';
    this.key = '73ca5739eb61464e9fb40b5bb2d588a6';
  }

  getLocationByCoords(coords, language) {
    const { api, key } = this;
    const { latitude, longitude } = coords;
    const url = `${api}?q=${latitude}%2C%20${longitude}&key=${key}&language=${language}&pretty=1`;
    return this.getLocationInfo(url);
  }

  getCoordsByLocation(searchLocation, language) {
    const { api, key } = this;
    const url = `${api}?q=${searchLocation}&key=${key}&language=${language}&pretty=1`;
    return this.getLocationInfo(url);
  }

  async getLocationInfo(url) {
    const data = await this.getJsonData(url);
    const geoData = {
      country: data.results[0].components.country,
      location: this.getLocationName(data),
      latitudeDegree: data.results[0].annotations.DMS.lat,
      longitudeDegree: data.results[0].annotations.DMS.lng,
    };

    return geoData;
  }

  getLocationName(data) {
    const { city, town, village, county, state } = data.results[0].components;
    const location = city || town || village || county || state;
    return location;
  }

  async getCurrentPosition() {

    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });

  }
}
