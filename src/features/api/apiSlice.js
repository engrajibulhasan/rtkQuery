import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../util/const";

export const apiSlice = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        })
    })


})

export const { useGetTodosQuery } = apiSlice;