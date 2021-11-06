import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../services/AuthService';

const initialState = {
  profile: {
    last_name: '',
    first_name: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state = action.payload.data.customer;
    });

    builder.addMatcher(authApi.endpoints.profile.matchFulfilled, (state, action) => {
      if (action?.payload) {
        state.profile = action.payload.data;
      }
    });

    builder.addMatcher(authApi.endpoints.login.matchRejected, (state) => {
      state.profile = {};
    });
  },
});

export const userProfileSelector = (state) => state.auth.profile;

export default authSlice.reducer;
