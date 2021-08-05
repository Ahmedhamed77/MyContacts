import {addNewContact} from '../../../api/contacts';
import {AddContactPayload} from '../../../api/contacts/types';
import {AppThunk} from '../../store/types';

export const addNewContacts = (newContact: AddContactPayload) =>
  <const>{
    type: 'ADD_NEW_CONTACT',
    newContact,
  };

export const newContactIsLoading = (status: boolean) =>
  <const>{
    type: 'NEW_CONTACT_LOADING',
    status,
  };

export const addContact =
  (payload: AddContactPayload): AppThunk =>
  async dispatch => {
    dispatch(newContactIsLoading(true));
    try {
      const res = await addNewContact(payload);
      dispatch(addNewContacts(res));
    } catch (error: any) {
      console.log(error, 'error addNewContact');
    }
    dispatch(newContactIsLoading(false));
  };
