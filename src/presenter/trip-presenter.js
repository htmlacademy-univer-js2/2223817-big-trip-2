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
  #tripEvent = [];
  #destinations = [];
  #offersByType = [];

  constructor(container, pointsModel) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  #renderPoint(tripEvent) {
    const pointElement = new PointView(tripEvent, this.#destinations, this.#offersByType);
    const editFormElement = new EditPointView(tripEvent, this.#destinations, this.#offersByType);

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
    this.#tripEvent = [...this.#pointsModel.tripEvent];
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offersByType = [...this.#pointsModel.offersByType];

    if (this.#tripEvent.length === 0) {
      render(new EmptyListView(), this.#container);
    } else {
      render(new InfoView(), document.querySelector('.trip-main'), RenderPosition.AFTERBEGIN);
      render(new SortView(), this.#container);
      render(this.#pointsListComponent, this.#container);

      for (let i = 0; i < this.#tripEvent.length; i++) {
        this.#renderPoint(this.#tripEvent[i]);
      }
    }
  }
}
