import {getContactsPayload} from '../../api/contacts/types';

export const sortContacts = (userContacts: any) => {
  let contactsArr = [];
  console.log('payload is', userContacts);
  let aCode = 'A'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    let currChar = String.fromCharCode(aCode + i);
    let obj = {
      title: currChar,
    };

    let currContacts = userContacts?.filter(item => {
      return item.last_name[0].toUpperCase() === currChar;
    });
    console.log(currContacts, 'what is currContacts');
    if (currContacts.length > 0) {
      currContacts.sort((a, b) => a.last_name.localeCompare(b.last_name));
      obj.data = currContacts;
      contactsArr.push(obj);
    }
  }

  return contactsArr;
};
