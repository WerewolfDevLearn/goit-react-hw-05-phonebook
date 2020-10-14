import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import ContactListItem from '../ContactListItem/ContactListItem';
import ContactListStl from './ContactList.module.css';

function ContactsList({ visibleContacts, onRemoveItem }) {
  return (
    <ul className={ContactListStl.contactList}>
      {visibleContacts.map((visibleContact) => (
        <li key={uuid4()}>
          <ContactListItem contact={visibleContact} onRemove={() => onRemoveItem(visibleContact.id)} />
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),

  onRemoveItem: PropTypes.func.isRequired,
};
export default ContactsList;
