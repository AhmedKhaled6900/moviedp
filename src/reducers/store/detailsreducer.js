import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const MovieDetails=createAsyncThunk(
    "moviedetails/details",async(id)=>{
return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US`)
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
  const DetailsSlice=createSlice({
 name:"moviedetails",
 initialState,
 extraReducers:(builder)=>{
    builder.addCase(MovieDetails.fulfilled,(state,action)=>{
        state.movies=action.payload
        console.log(action.payload)
    })
 }
  })
  export default DetailsSlice.reducer