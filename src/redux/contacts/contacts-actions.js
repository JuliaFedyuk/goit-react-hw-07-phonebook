// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000';

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch({ type: 'contacts/addContactRequest' });

  axios
    .post('/contacts', contact)
    .then(({ data }) =>
      dispatch({ type: 'contacts/addContactSuccess', payload: data }),
    )
    .catch(error =>
      dispatch({ type: 'contacts/addContactError', payload: error.message }),
    );
};

// const addContact = createAction('contacts/add', ({ name, number }) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
