import Api from './Api';

export default class Location extends Api {

  constructor() {
    super();
    this.api = 'https://api.opencagedata.com/geocode/v1/json';
    this.key = '73ca5739eb61464e9fb40b5bb2d588a6';
  }

  getLocationByCoords(latitude, longitude, language) {
    const { api, key } = this;
    const url = `${api}?q=${latitude}%2C%20${longitude}&key=${key}&language=${language}&pretty=1`;
    return (this.getLocationInfo(url));
  }

  getCoordsByLocation(searchLocation, language) {
    const { api, key } = this;
    const url = `${api}?q=${searchLocation}&key=${key}&language=${language}&pretty=1`;
    return (this.getLocationInfo(url));
  }

  async getLocationInfo(url) {
    const data = await this.getJsonData(url);
    const location = this.getLocationName(data);
    const { country } = data.results[0].components;
    const latitude = data.results[0].geometry.lat;
    const longitude = data.results[0].geometry.lng;
    const { lat, lng } = data.results[0].annotations.DMS;

    return {
      location,
      country,
      latitude,
      longitude,
      lat,
      lng,
    };
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
