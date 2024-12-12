import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/ModalSlice';
import taskReducer from './slice/TaskSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    task: taskReducer,
  },
});

// Autre methode

// const reducer = combineReducers ({
//   modal: modalSlice.reducer,
// })

//TODO recopier code jeremy
// export const store = configureStore({
//   reducer: {
//     modal: modalReducer,
//   },
// });