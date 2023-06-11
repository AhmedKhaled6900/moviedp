import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
 export  const FetchTopRated = createAsyncThunk(
  "top/topRated", async (url) => {
 return    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1'
 )
      .then((res) => {
        return  (res.data.results)
      })
  }
)
//  export  const FetchPopular = createAsyncThunk(
//   "top/topRated", async (url) => {
//  return    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1')
//       .then((res) => {
//         return  (res.data.results)
//       })
//   }
// )
const initialState = {
  loading: false,
  movies: [],
  error: ``,
  totalPages: 0
}
const topRatedSlice = createSlice(
  {
    name: "topRated",
    initialState,
    extraReducers: (builder) => {
      // builder.addCase(FetchTopRated.pending, (state, action) => {
      //   state.loading = true
      // })
      // builder.addCase(FetchTopRated.rejected, (state, action) => {
      //   state.loading = false
      // })
      builder.addCase(FetchTopRated.fulfilled, (state, action) => {
        state.loading = false
        state.movies = action.payload
   
      })


    }


  }
)



export default topRatedSlice.reducer;