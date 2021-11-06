import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ACCESS_TOKEN_STORAGE_KEY } from '../contants/config';
import { userProfileSelector } from '../redux/slices/authSlice';
import { useLazyProfileQuery } from '../services/AuthService';

const useAuth = () => {
  const keyLocalStorage = ACCESS_TOKEN_STORAGE_KEY;
  const [fetchProfile] = useLazyProfileQuery();
  
  const userProfile = useSelector(userProfileSelector);
  const accessToken = () => localStorage.getItem(keyLocalStorage);
  const setAccessToken = (token) => localStorage.setItem(keyLocalStorage, token);
  const hasLogin = () => !!localStorage.getItem(keyLocalStorage);
  const signOut = () => {
    localStorage.removeItem(keyLocalStorage);
  }

  useEffect(() => {
    if(hasLogin()) {
      fetchProfile();
    }
  }, []);

  return {accessToken, setAccessToken, hasLogin, signOut, userProfile};
}

export default useAuth;