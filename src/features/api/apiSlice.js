import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../util/const";

export const apiSlice = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        // Get Todos
        getTodos: builder.query({
            query: () => '/todos',
            keepUnusedDataFor: 10 //This API will call after 10 Second Inactivity
        })
    })


})

export const { useGetTodosQuery } = apiSlice;