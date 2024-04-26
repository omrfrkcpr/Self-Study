// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";

// Define a service using a base URL and expected endpoints
export const firmsApi = createApi({
  reducerPath: "firmsApi",
  tagTypes: ["Firms"],
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
    getFirms: builder.query({
      query: () => "firms",
      providesTags: ["Firms"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postFirm: builder.mutation({
      query: (info) => {
        console.log(info);
        return { url: "firms", method: "POST", body: info };
      },
      invalidatesTags: ["Firms"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    deleteFirm: builder.mutation({
      query: (id) => ({
        url: `firms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Firms"],
      transformResponse: (response) => {
        toastSuccessNotify(`The operation was successful!`);
        return response;
      },
      transformErrorResponse: (response) => {
        toastErrorNotify(`The operation failed!`);
        return response;
      },
    }),
    updateFirm: builder.mutation({
      query: (info) => ({
        url: `firms/${info._id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["Firms"],
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
  useGetFirmsQuery,
  usePostFirmMutation,
  useDeleteFirmMutation,
  useUpdateFirmMutation,
} = firmsApi;
