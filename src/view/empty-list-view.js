import {createElement} from '../render';

const createEmptyListTemplate = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class EmptyListView {
  #element = null;

  constructor() {
    this.#element = null;
  }

  get template() {
    return createEmptyListTemplate();
  }

  get element() {
    this.#element = this.#element || createElement(this.template);
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
