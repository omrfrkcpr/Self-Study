// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";

// Define a service using a base URL and expected endpoints
export const purchasesApi = createApi({
  reducerPath: "purchasesApi",
  tagTypes: ["Purchases", "Products"],
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
    getPurchases: builder.query({
      query: () => "purchases",
      providesTags: ["Purchases"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postPurchase: builder.mutation({
      query: (info) => {
        console.log(info);
        return { url: "purchases", method: "POST", body: info };
      },
      invalidatesTags: ["Purchases", "Products"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    deletePurchase: builder.mutation({
      query: (id) => ({
        url: `purchases/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Purchases", "Products"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    updatePurchase: builder.mutation({
      query: (info) => ({
        url: `purchases/${info._id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["Purchases"],
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
  useGetPurchasesQuery,
  usePostPurchaseMutation,
  useDeletePurchaseMutation,
  useUpdatePurchaseMutation,
} = purchasesApi;
