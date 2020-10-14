import React, { Component } from 'react';
import { v4 as uuid4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import AppStl from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    console.log('DONE');
    const oldContacts = localStorage.getItem('contacts');
    if (oldContacts) {
      this.setState({ contacts: JSON.parse(oldContacts) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onInputValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = (name, number) => {
    if (this.state.contacts.some((Contact) => Contact.name === name)) {
      alert(`${name} is already in Contacts`);
      return;
    }
    const contact = {
      id: uuid4(),
      name,
      number,
    };
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  removeContact = (ContactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== ContactId),
      };
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((Contact) => Contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <div className={AppStl.container}>
          <h2 className={AppStl.heading}>PhoneBook</h2>

          <ContactForm onAddContact={this.addContact} />

          <h2 className={AppStl.heading}>Contacts</h2>

          {contacts.length > 1 && <Filter filter={filter} onChangeFilter={this.onInputValue} />}

          {contacts.length > 0 && (
            <ContactsList contacts={contacts} visibleContacts={visibleContacts} onRemoveItem={this.removeContact} />
          )}
        </div>
      </>
    );
  }
}
