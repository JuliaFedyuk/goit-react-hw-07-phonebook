import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const contacts = this.props.contacts;
    console.log(this.props);

    return (
      <>
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <ul className="contact_list">
          {contacts.map(({ id, name, number }) => (
            <li className="contact_item" key={id}>
              <p className="contact_info">
                {name}: {number}
              </p>
              <button
                className="add_button"
                type="button"
                onClick={() => this.props.onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  contacts: contactsSelectors.getfilterContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
