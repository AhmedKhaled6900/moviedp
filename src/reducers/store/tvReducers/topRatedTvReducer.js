import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
export const FetchTopRatedTv = createAsyncThunk("topRatedTv/topRatedTv",async(url)=>{
    return axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1' 
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

  const topRatedTvSlice=createSlice({
    name:"topRatedTv",
    initialState,
    extraReducers:(builder)=>{
       builder.addCase(FetchTopRatedTv.fulfilled,(state,action)=>{
           state.movies=action.payload
           console.log(action.payload)
       })
    }
     })
     export default topRatedTvSlice.reducer