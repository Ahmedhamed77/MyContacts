import {Reducer} from 'redux';
import {AddNewContactAction, AddNewContactReducer} from './types';

export const initialState: AddNewContactReducer = {
  userContact: {},
  isLoading: false,
};

export const addNewContact: Reducer<AddNewContactReducer, AddNewContactAction> =
  (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NEW_CONTACT':
        return {
          ...state,
          userContacts: action.newContact,
        };
      default:
        return state;
    }
  };
