// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
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
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postProduct: builder.mutation({
      query: (info) => {
        console.log(info);
        return { url: "products", method: "POST", body: info };
      },
      invalidatesTags: ["Products"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    updateProduct: builder.mutation({
      query: (info) => ({
        url: `products/${info._id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["Products"],
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
  useGetProductsQuery,
  usePostProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
