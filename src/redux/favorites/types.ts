import {addContactToFav, removeContactToFav} from './actions';

export interface FavoriteReducer {
  favorites: [];
}

export type FavoriteAction =
  | ReturnType<typeof addContactToFav>
  | ReturnType<typeof removeContactToFav>;
