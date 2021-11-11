import { createApi } from '@reduxjs/toolkit/dist/query/react';
import API from '../contants/api';
import axiosBaseQuery from './BaseService';

export const companyApi = createApi({
  reducerPath: 'companyApi',
  tagTypes: ['BANNER', 'NEWS', 'SCHEDULES', 'PROFILE'],
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      getTopPageBanners: build.query({
        query: (params) => ({
          url: API.TOP_PAGE.BANNERS,
          method: 'GET',
          data: null,
          params,
        }),
        providesTags: () => [{ type: 'BANNER', id: 'LIST' }],
      }),
      getNews: build.query({
        query: (params) => ({
          url: API.TOP_PAGE.TOP_NEWS,
          method: 'GET',
          data: null,
          params,
        }),
        providesTags: () => [{ type: 'NEWS', id: 'LIST' }],
      }),
      getSchedules: build.query({
        query: (params) => ({
          url: API.COMPANY.SCHEDULES,
          method: 'GET',
          data: null,
          params,
        }),
        providesTags: () => [{ type: 'SCHEDULES', id: 'LIST' }],
      }),
      getTopPageProfile: build.query({
        query: (params) => ({
          url: API.TOP_PAGE.PROFILE,
          method: 'GET',
          data: null,
          params,
        }),
        providesTags: () => [{ type: 'PROFILE', id: 'LIST' }],
      }),
    };
  },
});

export const { useGetTopPageBannersQuery, useGetNewsQuery, useGetTopPageProfileQuery, useGetSchedulesQuery } =
  companyApi;
