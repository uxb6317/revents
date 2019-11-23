import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  currentUser: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email } = action.payload.creds;
      state.authenticated = true;
      state.currentUser = email;
    },

    logout: (state, action) => {
      state.authenticated = false;
      state.currentUser = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
