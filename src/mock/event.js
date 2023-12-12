import { randomInteger } from '../utils';

const dates = [
  '2021-03-18T11:53:00.000Z',
  '2021-03-18T21:45:00.000Z',
  '2021-03-19T23:35:00.000Z',
  '2022-03-20T02:22:00.000Z',
  '2022-03-20T16:41:00.000Z',
  '2022-03-20T11:12:00.000Z',
  '2022-03-20T09:22:00.000Z'
];

const types = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const createEvent = (id) => {
  const dateFrom = dates[id];
  const dateTo = dates[id + 1];
  return {
    basePrice: randomInteger(500, 3000),
    dateFrom: dateFrom,
    dateTo: dateTo,
    destination: randomInteger(0, 9),
    id: id,
    isFavorite: Boolean(randomInteger(0, 1)),
    offers: Array.from({ length: randomInteger(1, 3) }, () => randomInteger(0, 4)),
    type: types[randomInteger(0, types.length - 1)],
  };
};
