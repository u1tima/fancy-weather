import Api from './Api';

export default class Background extends Api {

  constructor() {
    super();
    this.api = 'https://api.unsplash.com/photos/random?';
    this.key = 'df6cbeb10ed19a9c5512445eb9aba2680480ccd18358a3c5d4c0490ed8ec00c3';
  }

  async loadRandomImage(location) {
    const { api, key } = this;
    const url = `${api}query=town,${location}&client_id=${key}`;

    const data = await this.getJsonData(url);

    const img = new Image();
    img.src = data.urls.regular;
    img.setAttribute('crossorigin', 'anonymous');

    img.onload = () => {
      document.body.style['background-image'] = `url(${img.src})`;
    };
  }
}
