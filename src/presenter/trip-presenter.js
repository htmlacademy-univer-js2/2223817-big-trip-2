import { render, RenderPosition } from '../render';
import EditPointView from '../view/edit-form-view';
import PointsListView from '../view/point-list-view';
import SortView from '../view/sort-view';
import PointView from '../view/point-view';
import EmptyListView from '../view/empty-list-view';
import InfoView from '../view/info-view';

export default class Trip {
  #pointsListComponent = new PointsListView();
  #container = null;

  #pointsModel = null;
  #event = [];
  #destinations = [];
  #offersByType = [];

  constructor(container, pointsModel) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  #renderPoint(event) {
    const pointElement = new PointView(event, this.#destinations, this.#offersByType);
    const editFormElement = new EditPointView(event, this.#destinations, this.#offersByType);

    const replacePointToForm = () => {
      this.#pointsListComponent.element.replaceChild(editFormElement.element, pointElement.element);
    };

    const replaceFormToPoint = () => {
      this.#pointsListComponent.element.replaceChild(pointElement.element, editFormElement.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointElement.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    editFormElement.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    editFormElement.element.querySelector('.event__save-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(pointElement, this.#pointsListComponent.element);
  }

  init() {
    this.#event = [...this.#pointsModel.event];
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offersByType = [...this.#pointsModel.offersByType];

    if (this.#event.length === 0) {
      render(new EmptyListView(), this.#container);
    } else {
      render(new InfoView(), document.querySelector('.trip-main'), RenderPosition.AFTERBEGIN);
      render(new SortView(), this.#container);
      render(this.#pointsListComponent, this.#container);

      for (let i = 0; i < this.#event.length; i++) {
        this.#renderPoint(this.#event[i]);
      }
    }
  }
}
