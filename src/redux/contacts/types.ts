import {AddContactPayload} from '../../api/contacts/types';
import {fetchContacts, addNewContacts, personContact} from './actions';
export interface ContactsReducer {
  userContacts: {
    id: number;
    first_name: string;
    last_name: string;
    contact_picture: string;
    is_favorite: boolean;
    country_code: string;
    phone_number: string;
  }[];
  person: AddContactPayload;
}

export type ContactsAction =
  | ReturnType<typeof fetchContacts>
  | ReturnType<typeof personContact>
  | ReturnType<typeof addNewContacts>;
