import EditFormView from '../view/edit-form-view.js';
import PointListView from '../view/point-list-view.js';
import SortView from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import { render } from '../render.js';

export default class TripPresenter {
  init (eventsContainer) {
    this.pointListContainer = eventsContainer;
    render(new SortView(), this.pointListContainer);
    render(new PointListView(), this.pointListContainer);
    const eventsList = eventsContainer.querySelector('.trip-point__list');
    render(new EditFormView(), eventsList);

    for (let i = 0; i < 3; i++) {
      render(new PointView, eventsList);
    }
  }
}