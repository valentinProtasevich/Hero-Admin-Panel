import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://heroes-fake-api.herokuapp.com'}),
  tagTypes: ['Heroes'],
  endpoints: builder => ({
    getHeroes: builder.query({
      query: () => 'heroes',
      providesTags: ['Heroes']
    }),
    createHero: builder.mutation({
      query: hero => ({
        url: '/heroes',
        method: 'POST',
        body: hero
      }),
      invalidatesTags: ['Heroes']
    }),
    deleteHero: builder.mutation({
      query: id => ({
        url: `/heroes/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Heroes']
    })
  })
});

//Экспорт хука
export const {useGetHeroesQuery, useCreateHeroMutation, useDeleteHeroMutation} = apiSlice; 


