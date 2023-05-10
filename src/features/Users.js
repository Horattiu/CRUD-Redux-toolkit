import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../FakeData';



// Creating a slice of the Redux store named 'users'
export const userSlice = createSlice({
  name: 'users',
  initialState: { value: UsersData }, // usersData l-am pasat ca si initial State
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);  // Pushing the new user into the state's value
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      state.value.map((user) => {    // Mapping over the state's value
        if (user.id === action.payload.id) { // If the user's id matches the payload id
          user.username = action.payload.username; // Update the user's username
        }
      });
    },
  },
});
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
