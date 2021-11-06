import { createApi } from '@reduxjs/toolkit/dist/query/react';
import axiosBaseQuery from './BaseService';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['AUTH', 'CURRENT_USER'],
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      login: build.mutation({
        query: (body) => ({
          url: '/login',
          method: 'POST',
          data: {company_id: 1, ...body},
        })
      }),
      profile: build.query({
        query: () => ({
          url: '/customer/profile',
        }),
        providesTags: () => ([{ type: 'CURRENT_USER', id: 'PROFILE' }])
      }),
      updateAvatar: build.mutation({
        query: (url) => ({
          url: '/customer/avatar',
          method: "post",
          data: {
            company_id: 1, 
            url
          },
        }),
        invalidatesTags: [{ type: 'CURRENT_USER', id: 'PROFILE' }]
      }),
    };
  },
});

export const { useLoginMutation, useLazyProfileQuery, useUpdateAvatarMutation } = authApi;
