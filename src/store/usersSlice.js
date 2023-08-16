import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const API ='http://localhost:8000/users';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    let res = await axios.get(API);
    return res.data
  }  
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [getUsers.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    }
  }
})

export default usersSlice.reducer;