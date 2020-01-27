const convertFarenheitToCelsius = (degree) => {
  return Math.round((degree - 32) * (5 / 9));
};

function getCurrentTime(timestamp, timezone, language) {

  const config = {
    timeZone: timezone,
    // year: 'numeric',
    // month: 'long',
    // weekday: 'short',
    // day: 'numeric',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  };

  const date = new Date(timestamp * 1000);

  return date.toLocaleDateString(language, config);
}

function getDayOfWeek(timestamp, language) {
  const daysOfWeek = {
    en: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    ru: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    be: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацьвер', 'пятніца', 'субота'],
  };
  const date = new Date(timestamp * 1000);
  const day = date.getDay();
  return daysOfWeek[language][day];
}

function getDayNumber() {
  const date = new Date();
  return date.getDay();
}

export default {
  getCurrentTime,
  getDayOfWeek,
  convertFarenheitToCelsius,
  getDayNumber,
};
