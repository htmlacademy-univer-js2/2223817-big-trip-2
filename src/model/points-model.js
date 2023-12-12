import {createDestination} from '../mock/destination';
import {createOfferByType} from '../mock/offers-by-type';
import {createEvent} from '../mock/event';

export default class PointModel {
  #destinations = null;
  #offersByType = null;
  #event = null;

  constructor() {
    this.#destinations = [];
    this.#offersByType = [];
    this.#event = [];

    for (let i = 0; i < 10; i++) {
      this.#destinations.push(createDestination(i));
    }
    for (let i = 0; i < 9; i++) {
      this.#offersByType.push(createOfferByType(i));
    }

    // for (let i = 0; i < 4; i++) {
    //   this.#event.push(createEvent(i));
    // }
  }

  get event() {
    return this.#event;
  }

  get destinations() {
    return this.#destinations;
  }

  get offersByType() {
    return this.#offersByType;
  }
}
