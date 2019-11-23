import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modals',
  initialState: null,
  reducers: {
    openModal: (state, action) => {
      const { modalType, modalProps } = action.payload;
      return { modalType, modalProps };
    },

    closeModal: () => {
      return null;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
