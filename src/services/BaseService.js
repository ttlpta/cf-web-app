import axios from 'axios';
import { ACCESS_TOKEN_STORAGE_KEY } from '../contants/config';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: 'https://uat-fanclub.bluebelt.asia/api/v1' }) =>
  async ({ url, method = 'GET', data, params }) => {
    try {
      let options = {
        url: url.includes('http') ? url : baseUrl + url,
        method,
        data,
        params,
      };
      const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
      if (accessToken) {
        options = {
          ...options,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
      }

      const result = await axios(options);
      if (!!result?.data?.data?.result && result?.data?.data?.result !== 'SUCCESS') {
        if (result?.data?.data?.result === 'UNAUTHORIZED') {
          localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
          window.location.reload();
          // return;
        }

        // eslint-disable-next-line no-throw-literal
        throw {
          error: result?.data?.data,
        };
      }
      return result;
    } catch (err) {
      console.error('Error:', { err });
      if (!err.response) {
        // network error
        alert('Network Error');
        throw err;
      }

      return err;
    }
  };

export default axiosBaseQuery;
