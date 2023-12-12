import dayjs from 'dayjs';
import { standartizeDateTime, upperCaseFirst } from '../utils';
import { createElement } from '../render';

const createOffersTemplate = (offers, type, activeOffersIds) => {
  const OFFERS_BY_TYPE = offers.filter((offer) => offer.type === type)[0].offers;
  return OFFERS_BY_TYPE
    .map((offer) => {
      return activeOffersIds.includes(offer.id)
        ? `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
      </li>`.trim()
        : '';
    })
    .join('\n');
};

const createPointTemplate = (tripEvent, destinations, offersByType) => {
  let { dateFrom, dateTo } = tripEvent;
  const { BASE_PRICE, destination: DESTINATION, IS_FAVORITE, offers: OFFERS, type: TYPE } = tripEvent;

  dateFrom = dayjs(dateFrom);
  dateTo = dayjs(dateTo);
  const DATETIME_BETWEEN = standartizeDateTime(dateFrom, dateTo);
  const DESTINATION_NAME = destinations[DESTINATION].name;

  const activeOffersTemplate = createOffersTemplate(offersByType, TYPE, OFFERS);

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">${dateFrom.format('MMM D')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${TYPE}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${upperCaseFirst(TYPE)} ${DESTINATION_NAME}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${dateFrom.format('HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${dateTo.format('HH:mm')}</time>
        </p>
        <p class="event__duration">${DATETIME_BETWEEN}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${BASE_PRICE}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${activeOffersTemplate}
      </ul>
      <button class="event__favorite-btn ${IS_FAVORITE ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class PointView {
  #tripEvent = null;
  #destinations = null;
  #offersByType = null;
  #element = null;

  constructor(tripEvent, destinations, offersByType) {
    this.#tripEvent = tripEvent;
    this.#destinations = destinations;
    this.#offersByType = offersByType;
    this.#element = null;
  }

  get template() {
    return createPointTemplate(this.#tripEvent, this.#destinations, this.#offersByType);
  }

  get element() {
    this.#element = this.#element || createElement(this.template);
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
