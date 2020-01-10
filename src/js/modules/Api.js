export default class Api {

  async getJsonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

}
