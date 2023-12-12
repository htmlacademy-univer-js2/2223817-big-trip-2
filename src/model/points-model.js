import {createDestination} from '../mock/destination';
import {createOfferByType} from '../mock/offers-by-type';
import {createEvent} from '../mock/trip-event';

export default class PointModel {
  #destinations = null;
  #offersByType = null;
  #tripEvent = null;

  constructor() {
    this.#destinations = [];
    this.#offersByType = [];
    this.#tripEvent = [];

    for (let i = 0; i < 10; i++) {
      this.#destinations.push(createDestination(i));
    }
    for (let i = 0; i < 9; i++) {
      this.#offersByType.push(createOfferByType(i));
    }
// Для отображения текста об отсутствии событий закомментрировать эту часть
    for (let i = 0; i < 4; i++) {
      this.#tripEvent.push(createEvent(i));
    }
//
  }

  get tripEvent() {
    return this.#tripEvent;
  }

  get destinations() {
    return this.#destinations;
  }

  get offersByType() {
    return this.#offersByType;
  }
}
