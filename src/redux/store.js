import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authApi } from '../services/AuthService';
import { companyApi } from '../services/CompanyService';
import { documentApi } from '../services/DocumentService';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [documentApi.reducerPath]: documentApi.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, documentApi.middleware, companyApi.middleware]),
});

export default store;
