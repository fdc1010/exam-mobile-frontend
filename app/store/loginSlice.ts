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
    login(state, action) {
      const {name, username, token} = action.payload;
      console.log(token);
      state.name = name;
      state.username = username;
      state.token = `${token}`;
    },
    logout() {
      return initialState;
    },
    updateToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const {login, logout, updateToken } = loginSlice.actions;

export default loginSlice.reducer;
