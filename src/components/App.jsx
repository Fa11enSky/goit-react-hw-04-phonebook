import { useState, useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const updateContacts = contact => {
    const { name } = contact;
    if (isIncludeContact(name)) {
      alert(` ${name} is already in contacts`);
      return;
    }
    setContacts(prev => {
      return [...prev, contact];
    });
  };
  const isIncludeContact = name => {
    return contacts.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  };
  const deleteContact = id => {
    setContacts(prev => {
      return prev.filter(el => el.id !== id);
    });
  };
  const handleInput = ev => {
    setFilter(ev.target.value);
  };
  const createRenderListContact = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <div>
      <h1
        style={{
          fontSize: '45px',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Phonebook
      </h1>
      <ContactForm updateContacts={updateContacts} />
      <h2
        style={{
          fontSize: '40px',
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        Contacts
      </h2>
      <Filter handleInput={handleInput} />
      <ContactList
        contacts={createRenderListContact()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
export default App;
