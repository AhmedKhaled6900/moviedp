import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
export const Popular = createAsyncThunk("movies/popular",async()=>{
    return axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
    .then((res)=>{
        return res.data
    })
})

const initialState = {
    loading: false,
    movies: [],
    error: ``,
    totalPages: 0
  }

  const PopularSlice=createSlice({
    name:"moviedetails",
    initialState,
    extraReducers:(builder)=>{
       builder.addCase(Popular.fulfilled,(state,action)=>{
           state.movies=action.payload
           console.log(action.payload)
       })
    }
     })
     export default PopularSlice.reducer