import 'bootstrap';
import '../scss/style.scss';
// import utils from './utils/utils';
// import map from './utils/map';
// import Weather from './classes/Weather';
// import Location from './classes/Location';
// import Background from './classes/Background';

// let tempSymbol;
// let language;
// let currentLocation;
// let currentLatitude;
// let currentLongitude;

// const temp = {
//   F: [],
//   C: [],
// };

// const translate = {
//   feel: {
//     en: 'Feels like:',
//     ru: 'Ощущается как:',
//     be: 'Адчуваецца як:',
//   },
//   wind: {
//     en: 'Wind',
//     ru: 'Ветер',
//     be: 'Вецер',
//   },
//   windUnits: {
//     en: 'm/s',
//     ru: 'м/с',
//     be: 'м/с',
//   },
//   humidity: {
//     en: 'Humidity:',
//     ru: 'Влажность:',
//     be: 'Вiльготнасць',
//   },
//   lat: {
//     en: 'Latitude:',
//     ru: 'Широта:',
//     be: 'Шырата',
//   },
//   long: {
//     en: 'Longitude:',
//     ru: 'Долгота',
//     be: 'Даўгата',
//   },
//   search: {
//     en: 'Search',
//     ru: 'Поиск',
//     be: 'Пошук',
//   },
//   searchPlaceHolder: {
//     en: 'Search city',
//     ru: 'Поиск по населённому пункту',
//     be: 'Пошук па населенаму пункце',
//   },
//   refresh: {
//     en: 'Refresh',
//     ru: 'Обновить',
//     be: 'Абнавiць',
//   },
//   daysOfWeek: {
//     en: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'monday', 'tuesday'],
//     ru: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье', 'понедельник', 'вторник'],
//     be: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацьвер', 'пятніца', 'сыбота', 'нядзеля', 'панядзелак', 'аўторак'],
//   },
//   shortDaysOfWeek: {
//     en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//     ru: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
//     be: ['Няд', 'Пнд', 'Аўт', 'Сер', 'Чцв', 'Пят', 'Суб'],
//   },
// };

// const btnChangeBackgroundImage = document.querySelector('.btn-refresh');

// const formSearch = document.querySelector('.form-search');
// const btnSearch = document.querySelector('.btn-search');
// const inputSearch = document.querySelector('.location-search');

// const temperatures = document.querySelectorAll('.temp');
// const btnCelsius = document.querySelector('.btn-celsius');
// const btnFarenheit = document.querySelector('.btn-farenheit');

// const buttonsLang = document.querySelectorAll('.btn-lang');
// const btnLangEn = document.querySelector('.btn-lang-en');
// const btnLangRu = document.querySelector('.btn-lang-ru');
// const btnLangBe = document.querySelector('.btn-lang-be');

// const weatherLocation = document.querySelector('.weather-location');
// const currentDate = document.querySelector('.date-location');
// const currentIcon = document.querySelector('.current-icon');
// const currentWindSpeed = document.querySelector('.current-wind-speed');
// const currentHumidity = document.querySelector('.current-humidity');
// const forecastDays = document.querySelectorAll('.forecast-day');
// const forecastIcons = document.querySelectorAll('.forecast-icon');
// const latitudeDegree = document.querySelector('.lat');
// const longitudeDegree = document.querySelector('.lng');

// const labelSummary = document.querySelector('.label-summary');
// const labelFeelsLike = document.querySelector('.label-feels-like');
// const labelWindSpeed = document.querySelector('.label-wind-speed');
// const labelUnitsWindSpeed = document.querySelector('.label-units-wind-speed');
// const labelHumidity = document.querySelector('.label-humidity');
// const labelLatitude = document.querySelector('.label-latitude');
// const labelLongitude = document.querySelector('.label-longitude');


// const _weather = new Weather();
// const _location = new Location();
// const _background = new Background();

// window.onload = async () => {

//   loadAppSettings();

//   const { coords } = await _location.getCurrentPosition();
//   const { latitude, longitude } = coords;

//   currentLatitude = latitude;
//   currentLongitude = longitude;

//   await setLocation(latitude, longitude, language);
//   setWeather(latitude, longitude, language);
//   map.createMap(latitude, longitude);
//   _background.loadRandomImage(currentLocation);
// };

// async function getNewLocationRequest() {
//   const searchLocation = inputSearch.value;

//   const { country,
//     location,
//     latitude,
//     longitude,
//     lat,
//     lng } = await _location.getCoordsByLocation(searchLocation, language);

//   currentLatitude = latitude;
//   currentLongitude = longitude;

//   weatherLocation.textContent = `${country}, ${location}`;
//   latitudeDegree.textContent = `${lat}`;
//   longitudeDegree.textContent = `${lng}`;

//   setWeather(latitude, longitude, language);

//   map.renderMap(latitude, longitude);
//   _background.loadRandomImage(location);
// }

// async function setWeather(latitude, longitude, language) {

//   const { time,
//     timezone,
//     summary,
//     icon,
//     temperature,
//     apparentTemperature,
//     humidity,
//     windSpeed,
//     forecastData } = await _weather.getWeatherByCoords(latitude, longitude, language);

//   temp.C.length = 0;
//   temp.F.length = 0;

//   const currentTemp = utils.convertFarenheitToCelsius(temperature);
//   const feelTemp = utils.convertFarenheitToCelsius(apparentTemperature);

//   temp.F.push(Math.round(temperature), Math.round(apparentTemperature));
//   temp.C.push(currentTemp, feelTemp);

//   const date = utils.getCurrentTime(time, timezone, language);
//   currentDate.textContent = date;

//   currentIcon.style['background-image'] = `url(./images/weather/${icon}.png)`;

//   labelSummary.textContent = summary;
//   currentWindSpeed.textContent = `${windSpeed}`;
//   currentHumidity.textContent = `${humidity * 100}%`;

//   forecastData.forEach((item, index) => {
//     const { time, icon, temperatureHigh } = item;
//     forecastDays[index].textContent = utils.getDayOfWeek(time, language);
//     forecastIcons[index].style['background-image'] = `url(./images/weather/${icon}.png)`;

//     temp.F.push(Math.round(temperatureHigh));
//     const t = utils.convertFarenheitToCelsius(temperatureHigh);
//     temp.C.push(t);
//   });

//   renderTemperature();
//   renderLanguage();
// }

// async function setLocation(latitude, longitude, language) {
//   const { country, location, lng, lat } = await _location.getLocationByCoords(latitude, longitude, language);
//   currentLocation = location;
//   weatherLocation.textContent = `${country}, ${location}`;
//   latitudeDegree.textContent = `${lat}`;
//   longitudeDegree.textContent = `${lng}`;
// }

// function renderTemperature() {
//   temperatures.forEach((item, index) => {
//     item.innerHTML = `${temp[tempSymbol][index]} &#176;${tempSymbol}`;
//   });
// }

// function loadAppSettings() {
//   loadTemperatureSettings();
//   loadLanguageSettings();
// }

// function loadTemperatureSettings() {
//   tempSymbol = localStorage.getItem('temp') || 'C';

//   switch (tempSymbol) {
//     case 'C':
//       btnCelsius.classList.add('active');
//       break;

//     case 'F':
//       btnFarenheit.classList.add('active');
//       break;

//     default:
//       break;
//   }
// }

// btnCelsius.addEventListener('click', () => {
//   tempSymbol = 'C';
//   localStorage.setItem('temp', tempSymbol);
//   [btnCelsius, btnFarenheit].forEach((item) => item.classList.remove('active'));
//   btnCelsius.classList.add('active');
//   renderTemperature();
// });

// btnFarenheit.addEventListener('click', () => {
//   tempSymbol = 'F';
//   localStorage.setItem('temp', tempSymbol);
//   [btnCelsius, btnFarenheit].forEach((item) => item.classList.remove('active'));
//   btnFarenheit.classList.add('active');
//   renderTemperature();
// });

// function loadLanguageSettings() {
//   language = localStorage.getItem('language') || 'en';

//   switch (language) {
//     case 'en':
//       btnLangEn.classList.add('active');
//       break;

//     case 'ru':
//       btnLangRu.classList.add('active');
//       break;

//     case 'be':
//       btnLangBe.classList.add('active');
//       break;

//     default:
//       break;
//   }
// }

// btnLangEn.addEventListener('click', () => {
//   language = 'en';
//   localStorage.setItem('language', language);
//   buttonsLang.forEach((item) => item.classList.remove('active'));
//   btnLangEn.classList.add('active');
//   renderLanguage();
// });

// btnLangRu.addEventListener('click', () => {
//   language = 'ru';
//   localStorage.setItem('language', language);
//   buttonsLang.forEach((item) => item.classList.remove('active'));
//   btnLangRu.classList.add('active');
//   renderLanguage();
// });

// btnLangBe.addEventListener('click', () => {
//   language = 'be';
//   localStorage.setItem('language', language);
//   buttonsLang.forEach((item) => item.classList.remove('active'));
//   btnLangBe.classList.add('active');
//   renderLanguage();
// });

// async function renderLanguage() {
//   const {
//     feel,
//     wind,
//     windUnits,
//     humidity,
//     lat,
//     long,
//     search,
//     searchPlaceHolder,
//     refresh,
//     daysOfWeek,
//   } = translate;

//   labelFeelsLike.textContent = feel[language];
//   labelWindSpeed.textContent = wind[language];
//   labelUnitsWindSpeed.textContent = windUnits[language];
//   labelHumidity.textContent = humidity[language];
//   labelLatitude.textContent = lat[language];
//   labelLongitude.textContent = long[language];

//   btnSearch.textContent = search[language];
//   inputSearch.placeholder = searchPlaceHolder[language];

//   btnChangeBackgroundImage.textContent = refresh[language];

//   const currentDay = utils.getDayNumber();

//   forecastDays.forEach((item, index) => {
//     item.textContent = daysOfWeek[language][index + currentDay + 1];
//   });

//   const { country, location } = await _location.getLocationByCoords(currentLatitude, currentLongitude, language);
//   currentLocation = location;
//   weatherLocation.textContent = `${country}, ${location}`;

//   const { summary } = await _weather.getWeatherByCoords(currentLatitude, currentLatitude, language);
//   labelSummary.textContent = summary;

// }

// btnChangeBackgroundImage.addEventListener('click', async (location) => {
//   _background.loadRandomImage(location);
// });

// btnSearch.addEventListener('click', getNewLocationRequest);

// formSearch.addEventListener('submit', (e) => {
//   e.preventDefault();
//   getNewLocationRequest();
//   inputSearch.value = '';
// });
