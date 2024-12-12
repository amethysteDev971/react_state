import { createSlice } from '@reduxjs/toolkit';

//! ################## Etat initial
const initialState = {
  isOpen: false,
  modalType: undefined,
};


//! ############## slice - methode pour modifier le state
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
