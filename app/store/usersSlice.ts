import {createSlice} from '@reduxjs/toolkit';

export type User = {
  id: string;
  title: string;
  done: boolean;
};

export type InitialState = {
  status: 'idle' | 'loading' | 'complete';
  entities: User[];
};

const initialState: InitialState = {
  status: 'idle',
  entities: [
    {
      id: '1',
      title: 'User 1',
      done: false,
    },
    {
      id: '2',
      title: 'User 2',
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
      const user = state.entities.find(e => e.id === userId);
      if (user) {
        user.isDeleted = true;
      }
    },
    updateUser(state) {
      const userId = action.payload;
      const user = state.entities.find(e => e.id === userId);
      if (user) {
        user.firstname = "test";
      }
    },
  },
});

export const {addUser, deleteUser, updateUser} = usersSlice.actions;

export default usersSlice.reducer;
