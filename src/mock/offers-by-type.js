import {randomInteger} from '../utils';
import {createOffer} from './offer';

const OFFER_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const createOffers = () => {
  let offers = [];
  for (let i = 0; i < randomInteger(1, 4); i++) {
    offers.push(createOffer(i));
  }
  return offers;
};

export const createOfferByType = (i) => ({
  type: OFFER_TYPES[i],
  offers: createOffers(),
});
