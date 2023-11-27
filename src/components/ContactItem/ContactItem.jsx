import css from './contactItem.module.css';
const ContactsItem = ({ contact, deleteContact }) => {
  return (
    <li className={css.item}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button
        onClick={() => {
          deleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactsItem;
