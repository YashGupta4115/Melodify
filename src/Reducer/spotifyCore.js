// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const spotifyCoreApi = createApi({
//   reducerPath: 'spotifyCoreApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.spotify.com/v1',
//     prepareHeaders: (headers,{getState}) => {
//     const token = getState().auth.accessToken;
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//     }
//   }),
//   endpoints: (builder) => ({
//     getTracks: builder.query({
//       query: () => ({
//         url: '/tracks/',
//         params: { ids: '2TpxZ7JUBn3uw46aR7qd6V' }
//       })
//     }),
//   }),
// });

// export const {
//   useGetTracksQuery,
// } = spotifyCoreApi;
