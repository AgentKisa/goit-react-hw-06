export const selectFilter = (state) => state.filters.name;

export const selectContacts = (state) => {
  console.log("State in ContactList:", state);
  return state.contacts.items;
};
