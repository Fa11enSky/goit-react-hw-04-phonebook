import ContactsItem from 'components/ContactItem/ContactItem';
import css from './contactList.module.css';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map(el => {
        return (
          <ContactsItem
            key={el.id}
            contact={el}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;
