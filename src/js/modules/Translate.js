export default class Translate {

  constructor() {

    this.feel = {
      en: 'Feels like:',
      ru: 'Ощущается как:',
      be: 'Адчуваецца як:',
    };

    this.wind = {
      en: 'Wind',
      ru: 'Ветер',
      be: 'Вецер',
    };

    this.windUnits = {
      en: 'm/s',
      ru: 'м/с',
      be: 'м/с',
    };

    this.humidity = {
      en: 'Humidity:',
      ru: 'Влажность:',
      be: 'Вiльготнасць',
    };

    this.lat = {
      en: 'Latitude:',
      ru: 'Широта:',
      be: 'Шырата',
    };

    this.long = {
      en: 'Longitude:',
      ru: 'Долгота',
      be: 'Даўгата',
    };

    this.search = {
      en: 'Search',
      ru: 'Поиск',
      be: 'Пошук',
    };

    this.searchPlaceHolder = {
      en: 'Search city',
      ru: 'Поиск по населённому пункту',
      be: 'Пошук па населенаму пункце',
    };

    this.refresh = {
      en: 'Refresh',
      ru: 'Обновить',
      be: 'Абнавiць',
    };

    this.daysOfWeek = {
      en: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'monday', 'tuesday'],
      ru: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье', 'понедельник', 'вторник'],
      be: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацьвер', 'пятніца', 'субота', 'нядзеля', 'панядзелак', 'аўторак'],
    };

    this.shortDaysOfWeek = {
      en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      ru: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
      be: ['Няд', 'Пнд', 'Аўт', 'Сер', 'Чцв', 'Пят', 'Суб'],
    };

    this.months = {
      en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      be: ['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Май', 'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад', 'Снежань'],
    };

  }
}
