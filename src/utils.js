export const randomInteger = (min, max) => {
  const Random = min + Math.random() * (max + 1 - min);
  return Math.floor(Random);
};

export function upperCaseFirst(str) {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

export const standartizeDateTime = (dateFrom, dateTo) => {
  const ONE_MINUTE_IN_MILLISECONDS = 60 * 1000;
  const ONE_HOUR_IN_MILLISECONDS = 60 * ONE_MINUTE_IN_MILLISECONDS;
  const ONE_DAY_IN_MILLISECONDS = 24 * ONE_HOUR_IN_MILLISECONDS;

  const DATETIME_BETWEEN = dateTo.diff(dateFrom);
  if (DATETIME_BETWEEN > ONE_DAY_IN_MILLISECONDS) {
    return `${parseInt(DATETIME_BETWEEN / ONE_DAY_IN_MILLISECONDS, 10)}D ${parseInt(
      (DATETIME_BETWEEN % ONE_DAY_IN_MILLISECONDS) / ONE_HOUR_IN_MILLISECONDS,
      10
    )}H ${parseInt(DATETIME_BETWEEN % ONE_HOUR_IN_MILLISECONDS, 10) / ONE_MINUTE_IN_MILLISECONDS}M`;
  } else if (DATETIME_BETWEEN > ONE_HOUR_IN_MILLISECONDS) {
    return `${parseInt((DATETIME_BETWEEN % ONE_DAY_IN_MILLISECONDS) / ONE_HOUR_IN_MILLISECONDS, 10)}H ${
      parseInt(DATETIME_BETWEEN % ONE_HOUR_IN_MILLISECONDS, 10) / ONE_MINUTE_IN_MILLISECONDS
    }M`;
  } else {
    return `${parseInt(DATETIME_BETWEEN % ONE_HOUR_IN_MILLISECONDS, 10) / ONE_MINUTE_IN_MILLISECONDS}M`;
  }
};
