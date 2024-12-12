import { createSlice } from '@reduxjs/toolkit';

//! ################## Etat initial
const initialState = {
  isOpen: false,
  action: {
    read:false,
    update:false
  },
  modalType: undefined,
};


//! ############## slice - methode pour modifier le state
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
        state.isOpen = false;
        state.action = {
            read:false,
            update:false
          }
    },
    openModal: (state,{payload}) => {
        console.log('payload => ', payload)
        const {action} = state
        switch (payload) {
            case 'read':
                // alert('read');
                action.read = true;
                break;
            case 'update':
                // alert('update');
                break;
            case 'delete':
                // alert('delete');
                break;
            default:
                break;
        }
        state.isOpen = true;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
