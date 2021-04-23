import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contact_list">
    {contacts.map(({ id, name, number }) => (
      <li className="contact_item" key={id}>
        <p className="contact_info">
          {name}: {number}
        </p>
        <button
          className="add_button"
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDeleteContact: PropTypes.func.isRequired,
};

const getfilterContacts = (allContacts, filter) => {
  const filterNormalize = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalize),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getfilterContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
