import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './contactForm.module.css';

const ContactForm = ({ updateContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputName = ev => {
    setName(ev.target.value);
  };
  const handleInputNumber = ev => {
    setNumber(ev.target.value);
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    updateContacts(newContact);
    ev.target.reset();
  };
  return (
    <form className={css.main_form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.contact_input}
          onInput={handleInputName}
          type="text"
          name="name"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.contact_input}
          type="tel"
          name="number"
          required
          onInput={handleInputNumber}
        />
      </label>

      <button className={css.contact_btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
