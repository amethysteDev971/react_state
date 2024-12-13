import { createSlice } from '@reduxjs/toolkit';

//! ################## Etat initial
const initialState = {
  isOpen: false,
  readTask:false,
  modalType: undefined,
};


//! ############## slice - methode pour modifier le state
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false
      state.readTask = false
    },
    openModal: (state) => {
      state.isOpen = true
    },
    openReadModal: (state) =>{
        state.isOpen = true
        state.readTask = true
    },
  },
});

export const { closeModal, openModal, openReadModal } = modalSlice.actions;
export default modalSlice.reducer;
