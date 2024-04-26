// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";

// Define a service using a base URL and expected endpoints
export const brandsApi = createApi({
  reducerPath: "brandsApi",
  tagTypes: ["Brands"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => "brands",
      providesTags: ["Brands"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postBrand: builder.mutation({
      query: (info) => {
        console.log(info);
        return { url: "brands", method: "POST", body: info };
      },
      invalidatesTags: ["Brands"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `brands/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Brands"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    updateBrand: builder.mutation({
      query: (info) => ({
        url: `brands/${info._id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["Brands"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBrandsQuery,
  usePostBrandMutation,
  useDeleteBrandMutation,
  useUpdateBrandMutation,
} = brandsApi;
