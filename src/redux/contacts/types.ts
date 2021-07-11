import {getContactsPayload} from '../../api/contacts/types';
import {fetchContacts} from './actions';
export interface ContactsReducer {
  userContacts: [
    {
      id: number;
      first_name: string;
      last_name: string;
      contact_picture: string;
      is_favorite: boolean;
      country_code: string;
      phone_number: string;
    },
  ];
}

export type ContactsAction = ReturnType<typeof fetchContacts>;
