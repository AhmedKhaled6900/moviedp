import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
export const Popular = createAsyncThunk("movies/popular",async()=>{
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1'
    )
    .then((res)=>{
        return res.data.results
    })
})

const initialState = {
    loading: false,
    movies: [],
    error: ``,
    totalPages: 0
  }

  const PopularSlice=createSlice({
    name:"popular",
    initialState,
    extraReducers:(builder)=>{
       builder.addCase(Popular.fulfilled,(state,action)=>{
           state.movies=action.payload
           console.log(action.payload)
       })
    }
     })
     export default PopularSlice.reducer