import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const FetchTvDetails=createAsyncThunk(
    "tvDetails/tvDetails",async(id)=>{
return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US`)
.then((res)=>{
    return  (res.data)  
})
})

const initialState = {
    loading: false,
    movies: [],
    error: ``,
    totalPages: 0
  }
  const TvDetailsSlice=createSlice({
 name:"tvDetails",
 initialState,
 extraReducers:(builder)=>{
    builder.addCase(FetchTvDetails.fulfilled,(state,action)=>{
        state.movies=action.payload
        console.log(action.payload)
    })
 }
  })
  export default TvDetailsSlice.reducer