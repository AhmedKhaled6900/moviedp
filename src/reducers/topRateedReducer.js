import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
 export  const FetchTopRated = createAsyncThunk(
  "top/topRated", async (url) => {
 return    axios.get(url)
      .then((res) => {
        return  (res.data.results)
      })
  }
)
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