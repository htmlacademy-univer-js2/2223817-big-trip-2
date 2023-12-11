export const randomInteger = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

export function upperCaseFirst(str) {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

export const standartizeDateTime = (dateFrom, dateTo) => {
  const oneMinuteInMilliseconds = 60 * 1000;
  const oneHourInMilliseconds = 60 * oneMinuteInMilliseconds;
  const oneDayInMilliseconds = 24 * oneHourInMilliseconds;

  const datetimeBetween = dateTo.diff(dateFrom);
  if (datetimeBetween > oneDayInMilliseconds) {
    return `${parseInt(datetimeBetween / oneDayInMilliseconds, 10)}D ${parseInt(
      (datetimeBetween % oneDayInMilliseconds) / oneHourInMilliseconds,
      10
    )}H ${parseInt(datetimeBetween % oneHourInMilliseconds, 10) / oneMinuteInMilliseconds}M`;
  } else if (datetimeBetween > oneHourInMilliseconds) {
    return `${parseInt((datetimeBetween % oneDayInMilliseconds) / oneHourInMilliseconds, 10)}H ${
      parseInt(datetimeBetween % oneHourInMilliseconds, 10) / oneMinuteInMilliseconds
    }M`;
  } else {
    return `${parseInt(datetimeBetween % oneHourInMilliseconds, 10) / oneMinuteInMilliseconds}M`;
  }
};
