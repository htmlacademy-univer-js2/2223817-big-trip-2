import {randomInteger} from '../utils';

const TITLES = ['First', 'Business', 'Economy'];

export const createOffer = (id) => ({
  id: id,
  title: TITLES[randomInteger(0, TITLES.length - 1)],
  price: randomInteger(10, 500),
});
