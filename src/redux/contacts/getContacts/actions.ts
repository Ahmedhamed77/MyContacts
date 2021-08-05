import {getContacts} from '../../../api/contacts';
import {getContactsPayload} from '../../../api/contacts/types';
import {AppThunk} from '../../store/types';

export const contactsIsLoading = (status: boolean) =>
  <const>{
    type: 'CONTACTS_IS_LOADING',
    status,
  };

export const fetchContactsAction = (contacts: getContactsPayload[]) =>
  <const>{
    type: 'GET_CONTACTS',
    contacts,
  };

export const fetchContacts = (): AppThunk => async dispatch => {
  console.log('inside here');
  dispatch(contactsIsLoading(true));
  try {
    const res = await getContacts();
    dispatch(fetchContactsAction(res));
  } catch (error) {
    console.log(error, 'fetching contacts error');
  }
  dispatch(contactsIsLoading(false));
};
