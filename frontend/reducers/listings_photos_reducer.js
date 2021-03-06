import { RECEIVE_LISTINGS, 
  RECEIVE_LISTING, 
  RECEIVE_SEARCH_LISTINGS, 
  CLEAR_PHOTOS } from '../actions/listing_actions';
import { RECEIVE_USER_BOOKINGS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const listingsPhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return merge({}, state, action.payload.listingPhotos);
    case RECEIVE_LISTING:
      return merge({}, state, action.payload.listingPhotos);
    case RECEIVE_USER_BOOKINGS:
      return action.payload.listingPhotos || {};
    case RECEIVE_SEARCH_LISTINGS:
      return action.payload.listingPhotos;
    case CLEAR_PHOTOS:
      return {};
    default:
      return state;
  }
};

export default listingsPhotoReducer;