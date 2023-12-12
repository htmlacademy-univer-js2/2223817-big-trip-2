import {randomInteger} from '../utils';

const DESCRIPTIONS = ['Отличный город', 'Много достопремечательностей', 'Самое то для туристов'];
const NAMES = ['Dublin', 'Copenhagen', 'Amsterdam', 'Moscow', 'Rome', 'Madrid'];

export const createDestination = (id) => ({
  id: id,
  description: DESCRIPTIONS[randomInteger(0, DESCRIPTIONS.length - 1)],
  name: NAMES[randomInteger(0, NAMES.length - 1)],
  pictures: [
    {
      src: `http://picsum.photos/248/152?r=${randomInteger(0, 10)}`,
      description: DESCRIPTIONS[randomInteger(0, DESCRIPTIONS.length - 1)],
    },
  ],
});
