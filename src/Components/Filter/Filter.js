import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

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
  value: contactsSelectors.getFilter(state),
});

const mapToDispatchProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapToDispatchProps)(Filter);
