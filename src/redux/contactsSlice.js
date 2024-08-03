import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const sliceContacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const contactReducer = sliceContacts.reducer;
export const { deleteContact, addContact } = sliceContacts.actions;
