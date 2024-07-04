// // src/redux/authSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import querystring from 'querystring-es3';

// export const fetchAccessToken = createAsyncThunk('auth/fetchAccessToken', async () => {
//   const client_id = 'YOUR_CLIENT_ID';
//   const client_secret = 'YOUR_CLIENT_SECRET';

//   const body = querystring.stringify({
//     grant_type: 'client_credentials',
//     client_id: client_id,
//     client_secret: client_secret,
//   });

//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: body,
//   });

//   const data = await response.json();
//   return data.access_token;
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     accessToken: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAccessToken.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchAccessToken.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.accessToken = action.payload;
//       })
//       .addCase(fetchAccessToken.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default authSlice.reducer;
