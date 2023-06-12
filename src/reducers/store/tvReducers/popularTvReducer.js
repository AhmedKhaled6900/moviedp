import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
export const FetchPopularTv = createAsyncThunk("populartv/popularTv",async(url)=>{
    return axios.get('https://api.themoviedb.org/3/tv/popular?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1' 
    )
    .then((res)=>{
        return  (res.data.results)
    })
   
})

const initialState = {
    loading: false,
    movies: [],
    error: ``,
    totalPages: 0
  }

  const PopularTvSlice=createSlice({
    name:"popularTv",
    initialState,
    extraReducers:(builder)=>{
       builder.addCase(FetchPopularTv.fulfilled,(state,action)=>{
           state.movies=action.payload
           console.log(action.payload)
       })
    }
     })
     export default PopularTvSlice.reducer