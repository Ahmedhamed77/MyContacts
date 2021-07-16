import {FavoriteReducer, FavoriteAction} from './types';
import {Reducer} from 'redux';

const initialState: FavoriteReducer = {
  favorites: [],
};

const favorites: Reducer<FavoriteReducer, FavoriteAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'ADD_CONTACT_TO_FAV':
      return {
        ...state,
        favorites: [...state.favorites, action.contact],
      };

    default:
      return state;
  }
};
