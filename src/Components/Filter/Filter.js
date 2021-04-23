import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label className="filter_label">
    Find contacts by name
    <input
      className="filter_input"
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapToDispatchProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapToDispatchProps)(Filter);
