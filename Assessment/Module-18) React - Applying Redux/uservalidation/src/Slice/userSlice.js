import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
  },
  reducers: {
    registerUser: (state, action) => {
      state.data = action.payload;
      console.log('User Registered:', action.payload); 
    },
  },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
