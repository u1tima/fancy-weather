/* eslint-disable no-undef */
export default class Map {

  constructor() {
    this.key = 'pk.eyJ1IjoidWx0aW1hIiwiYSI6ImNrNTg2ZzA2ZDBiOWczZG11am1oNGg2ZDYifQ.vnDXZMARBURkLqeN5jyBOA';
    this.src = 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.js';
    this.href = 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css';
  }

  createMap(coords) {
    const { latitude, longitude } = coords;
    const script = document.createElement('script');
    const link = document.createElement('link');

    script.src = this.src;
    link.href = this.href;
    link.rel = 'stylesheet';

    script.onload = () => {
      mapboxgl.accessToken = this.key;

      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 10,
      });
      console.log('map created');
    };

    document.head.appendChild(script);
    document.head.appendChild(link);

  }
}
