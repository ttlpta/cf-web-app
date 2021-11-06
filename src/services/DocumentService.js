import { createApi } from '@reduxjs/toolkit/dist/query/react';
import axiosBaseQuery from './BaseService';

export const documentApi = createApi({
  reducerPath: 'documentApi',
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      upload: build.mutation({
        query: (formData) => ({
          url: '/customer/document',
          method: "POST",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
      }),
    };
  },
});

export const { useUploadMutation } = documentApi;
