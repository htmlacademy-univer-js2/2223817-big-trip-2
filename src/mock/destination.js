import { randomInteger } from '../utils';

const descriptions = ['Отличный город', 'Много достопремечательностей', 'Самое то для туристов'];
const names = ['Dublin', 'Copenhagen', 'Amsterdam', 'Moscow', 'Rome', 'Madrid'];

export const createDestination = (id) => ({
  id: id,
  description: descriptions[randomInteger(0, descriptions.length - 1)],
  name: names[randomInteger(0, names.length - 1)],
  pictures: [
    {
      src: `http://picsum.photos/248/152?r=${randomInteger(0, 10)}`,
      description: descriptions[randomInteger(0, descriptions.length - 1)],
    },
  ],
});
