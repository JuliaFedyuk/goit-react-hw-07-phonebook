import { createSelector } from 'reselect';

const getLoading = state => state.contacts.loading;
const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getfilterContacts = createSelector(
  [getItems, getFilter],
  (allContacts, filter) => {
    const filterNormalize = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize),
    );
  },
);

export default {
  getLoading,
  getItems,
  getFilter,
  getfilterContacts,
};
