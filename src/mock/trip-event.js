import { randomInteger } from '../utils';

const DATES = [
  '2021-03-18T11:53:00.000Z',
  '2021-03-18T21:45:00.000Z',
  '2021-03-19T23:35:00.000Z',
  '2021-03-20T02:22:00.000Z',
  '2021-03-20T16:41:00.000Z',
];

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const createEvent = (id) => {
  const DATE_FROM = DATES[id];
  const DATE_TO = DATES[id + 1];
  return {
    basePrice: randomInteger(500, 3000),
    dateFrom: DATE_FROM,
    dateTo: DATE_TO,
    destination: randomInteger(0, 9),
    id: id,
    isFavorite: Boolean(randomInteger(0, 1)),
    offers: Array.from({ length: randomInteger(1, 3) }, () => randomInteger(0, 4)),
    type: TYPES[randomInteger(0, TYPES.length - 1)],
  };
};
