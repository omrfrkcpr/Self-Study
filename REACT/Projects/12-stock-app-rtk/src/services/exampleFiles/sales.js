// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";

// Define a service using a base URL and expected endpoints
export const salesApi = createApi({
  reducerPath: "salesApi",
  tagTypes: ["Sales"],
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
    getSales: builder.query({
      query: () => "sales",
      providesTags: ["Sales"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postSale: builder.mutation({
      query: (info) => {
        console.log(info);
        return { url: "sales", method: "POST", body: info };
      },
      invalidatesTags: ["Sales"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    deleteSale: builder.mutation({
      query: (id) => ({
        url: `sales/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Sales"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    updateSale: builder.mutation({
      query: (info) => ({
        url: `sales/${info._id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["Sales"],
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
  useGetSalesQuery,
  usePostSaleMutation,
  useDeleteSaleMutation,
  useUpdateSaleMutation,
} = salesApi;
