import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const createMutation = (builder, options, tags) => {
  return builder.mutation({
    ...options,
    transformResponse: (response) => {
      toastSuccessNotify(`The operation was successful!`);
      return response;
    },
    transformErrorResponse: (response) => {
      toastErrorNotify(`The operation failed!`);
      return response;
    },
    invalidatesTags: tags,
  });
};

// Define a service using a base URL and expected endpoints
export const stocksApi = createApi({
  reducerPath: "api",
  tagTypes: ["Firms", "Sales", "Brands", "Purchases", "Products", "Categories"],
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
    // Firms endpoints
    getFirms: builder.query({
      query: () => "firms",
      providesTags: ["Firms"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postFirm: createMutation(
      builder,
      {
        query: (firm) => ({ url: "firms", method: "POST", body: firm }),
      },
      ["Firms"]
    ),
    updateFirm: createMutation(
      builder,
      {
        query: (firm) => ({
          url: `firms/${firm._id}`,
          method: "PUT",
          body: firm,
        }),
      },
      ["Firms"]
    ),
    deleteFirm: createMutation(
      builder,
      {
        query: (id) => ({ url: `firms/${id}`, method: "DELETE" }),
      },
      ["Firms"]
    ),
    getBrands: builder.query({
      query: () => "brands",
      providesTags: ["Brands"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postBrand: createMutation(
      builder,
      {
        query: (brand) => ({ url: "brands", method: "POST", body: brand }),
      },
      ["Brands"]
    ),
    updateBrand: createMutation(
      builder,
      {
        query: (brand) => ({
          url: `brands/${brand._id}`,
          method: "PUT",
          body: brand,
        }),
      },
      ["Brands"]
    ),
    deleteBrand: createMutation(
      builder,
      {
        query: (id) => ({ url: `brands/${id}`, method: "DELETE" }),
      },
      ["Brands"]
    ),
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postProduct: createMutation(
      builder,
      {
        query: (product) => ({
          url: "products",
          method: "POST",
          body: product,
        }),
      },
      ["Products"]
    ),
    deleteProduct: createMutation(
      builder,
      {
        query: (id) => ({ url: `products/${id}`, method: "DELETE" }),
      },
      ["Products"]
    ),
    getPurchases: builder.query({
      query: () => "purchases",
      providesTags: ["Purchases"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postPurchase: createMutation(
      builder,
      {
        query: (purchase) => ({
          url: "purchases",
          method: "POST",
          body: purchase,
        }),
      },
      ["Purchases", "Products"]
    ),
    updatePurchase: createMutation(
      builder,
      {
        query: (purchase) => ({
          url: `purchases/${purchase._id}`,
          method: "PUT",
          body: purchase,
        }),
      },
      ["Purchases", "Products"]
    ),
    deletePurchase: createMutation(
      builder,
      {
        query: (id) => ({ url: `purchases/${id}`, method: "DELETE" }),
      },
      ["Purchases", "Products"]
    ),
    getSales: builder.query({
      query: () => "sales",
      providesTags: ["Sales"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
    postSale: createMutation(
      builder,
      {
        query: (sale) => ({ url: "sales", method: "POST", body: sale }),
      },
      ["Sales", "Products"]
    ),
    updateSale: createMutation(
      builder,
      {
        query: (sale) => ({
          url: `sales/${sale._id}`,
          method: "PUT",
          body: sale,
        }),
      },
      ["Sales", "Products"]
    ),
    deleteSale: createMutation(
      builder,
      {
        query: (id) => ({ url: `sales/${id}`, method: "DELETE" }),
      },
      ["Sales", "Products"]
    ),
    getCategories: builder.query({
      query: () => "categories",
      providesTags: ["Categories"],
      transformResponse: (response) => {
        return response.data;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetFirmsQuery,
  usePostFirmMutation,
  useUpdateFirmMutation,
  useDeleteFirmMutation,
  useGetBrandsQuery,
  usePostBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
  useGetProductsQuery,
  usePostProductMutation,
  useDeleteProductMutation,
  useGetPurchasesQuery,
  usePostPurchaseMutation,
  useUpdatePurchaseMutation,
  useDeletePurchaseMutation,
  useGetSalesQuery,
  usePostSaleMutation,
  useUpdateSaleMutation,
  useDeleteSaleMutation,
  useGetCategoriesQuery,
} = stocksApi;
