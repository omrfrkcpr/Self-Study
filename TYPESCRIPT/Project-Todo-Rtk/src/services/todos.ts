import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SweetAlertIcons, SweetPosition, notify } from "../helper/sweetalert";

const apiUrl: string = import.meta.env.VITE_BASE_URL; // Replace with your API URL

// Define the API using createApi
export const todosApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }), //! baseUrl i tanımladık ve varsa diğer yapılandırmalarınız yapabilirsiniz.
  tagTypes: ["Todos"], //! tagimizi belirledik.
  endpoints: (builder) => ({
    getTodos: builder.query<ITodoType[], void>({
      query: () => "todos",
      providesTags: ["Todos"], //! cache atılacak, korunacak veri olduğunu belirttik.
    }),
    addTodo: builder.mutation({
      //! addTodo isminde bir fonksiyon tanımladık. bu işlem değişklik yapan bir işlem olduğu için buidler.mutation ile tanımladık.
      query: (text: string) => ({
        url: "todos",
        method: "POST",
        body: { task: text, isDone: false },
      }),
      invalidatesTags: ["Todos"], //! verdiğimiz tag ile cachei temizledik. Böylelikle rtk-query bizim yerimize getTodos fonksiyonunu cagırıp cachei güncelliyor.
      transformResponse: (response: ITodoType[]) => {
        notify(
          "The todo was created successfully!",
          SweetAlertIcons.SUCCESS,
          SweetPosition.Center
        );
        return response;
      },
      transformErrorResponse: (response) => {
        notify(
          "The todo was not created successfully!",
          SweetAlertIcons.ERROR,
          SweetPosition.Center
        );
        return response;
      },
    }),
    toggleTodo: builder.mutation({
      query: (todo: ITodoType) => ({
        url: `todos/${todo.id}`,
        method: "PUT",
        body: { ...todo, isDone: !todo.isDone },
      }),
      invalidatesTags: ["Todos"],
      transformResponse: (response: ITodoType[]) => {
        notify(
          "The todo was updated successfully!",
          SweetAlertIcons.SUCCESS,
          SweetPosition.Center
        );
        return response;
      },
      transformErrorResponse: (response) => {
        notify(
          "The todo was not updated successfully!",
          SweetAlertIcons.ERROR,
          SweetPosition.Center
        );
        return response;
      },
    }),
    deleteTodo: builder.mutation({
      query: (id: string | number) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
      transformResponse: (response: ITodoType[]) => {
        notify(
          "The todo was deleted successfully!",
          SweetAlertIcons.SUCCESS,
          SweetPosition.Center
        );
        return response;
      },
      transformErrorResponse: (response) => {
        notify(
          "The todo was not deleted successfully!",
          SweetAlertIcons.ERROR,
          SweetPosition.Center
        );
        return response;
      },
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
} = todosApi;//? tanımladığımız en pointleri hook olarak export ediyoruz. use keywordu ile başlatıyoruz ve devamında camelCase olarak verdiğimiz isimleri ve builder.metodunu yazıyoruz. Örneğin; getTodos query sini useGetTodosQuery olarak export ediyoruz.

//! Tanımladığız bu query yi store olmadan da doğrudan kullanabiliriz.Rtk Query den gelen ApiProvider sarmalı ile doğrudan yapımızı sarmallayabiliriz. İçerisinde api propuna da burada tanımladığımız query yi verbeiliriz.
