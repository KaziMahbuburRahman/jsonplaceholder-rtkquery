import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => `posts`,
    }),
    getPost: build.query({
      query: (id) => `posts/${id}`,
    }),
    sendPost: build.mutation({
      query: (post) => ({
        url: `posts`,
        method: "POST",
        body: post,
      }),
    }),
  }),
});
export const { useGetPostsQuery, useGetPostQuery, useSendPostMutation } =
  baseApi;

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default baseApi;
