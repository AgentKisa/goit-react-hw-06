import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
};

const sliceContacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log("Adding contact:", action.payload);
      state.contacts.items.push(action.payload); // Исправлено
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const contactReducer = sliceContacts.reducer;
export const { deleteContact, addContact } = sliceContacts.actions;
