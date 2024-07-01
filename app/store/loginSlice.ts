import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  username: '',
  token: '',
};

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      const {name, username, token} = action.payload;
      state.name = name;
      state.username = username;
      state.token = token;
    },
    updateToken(state, action) {
      state.token = action.payload.token;
    },
    clearUser() {
      return initialState;
    },
  },
});

export const {updateUser, updateToken, clearUser} = loginSlice.actions;

export default loginSlice.reducer;
