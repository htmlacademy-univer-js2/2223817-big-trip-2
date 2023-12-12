import FiltersView from './view/filters-view';
import Trip from './presenter/trip-presenter';
import {render} from './render';
import PointModel from './model/points-model';
import MenuView from './view/menu-view';

const pointsModel = new PointModel();
const tripPresenter = new Trip(document.querySelector('.trip-events'), pointsModel);

render(new MenuView(), document.querySelector('.trip-controls__navigation'));
render(new FiltersView(), document.querySelector('.trip-controls__filters'));
tripPresenter.init(pointsModel);
