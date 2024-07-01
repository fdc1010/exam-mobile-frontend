import {createSlice} from '@reduxjs/toolkit';

export type User = {
  id: string;
  firstname: string;
  done: boolean;
};

export type InitialState = {
  status: 'idle' | 'loading' | 'complete';
  users: User[];
};

const initialState: InitialState = {
  status: 'idle',
  users: [
    {
      id: '1',
      firstname: 'User 1',
      done: false,
    },
    {
      id: '2',
      firstname: 'User 2',
      done: false,
    },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      const user = action.payload;
      state.users.push(user);
    },
    deleteUser(state, action) {
      const userId = action.payload;
      const user = state.users.find(e => e.id === userId);
      if (user) {
        user.done = true;
      }
    },
    updateUser(state, action) {
      const userId = action.payload;
      const user = state.users.find(e => e.id === userId);
      if (user) {
        user.firstname = "test";
      }
    },
  },
});

export const {addUser, deleteUser, updateUser} = usersSlice.actions;

export default usersSlice.reducer;
