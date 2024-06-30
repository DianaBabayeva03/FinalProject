import { apiSlice } from './apiSlice';

const NEWS_URL = '/api/news';

export const newsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => ({
        url: `${NEWS_URL}`,
        method: 'GET',
      }),
    }),
    createNews: builder.mutation({
      query: (data) => ({
        url: `${NEWS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    updateNews: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${NEWS_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `${NEWS_URL}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetNewsQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
} = newsApiSlice;
