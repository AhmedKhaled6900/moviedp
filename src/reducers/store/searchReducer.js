import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
export const searchAll = createAsyncThunk("search/searchall",async(keyword)=>{
    return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1&query=${keyword}&include_adult=false`

    )

    .then((res)=>{
        return res.data
    })
})
export const searchMovies = createAsyncThunk("search/searchmovies",async(keyword)=>{
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1&query=${keyword}&include_adult=false`

    )

    .then((res)=>{
        return res.data
    })
})
export const searchTv = createAsyncThunk("search/searchtv",async(keyword)=>{
    return axios.get(`https://api.themoviedb.org/3/search/tv?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1&query=${keyword}&include_adult=false`

    )

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

  const allSearchSlice=createSlice({
    name:"searchall",
    initialState,
    extraReducers:
    
    (builder)=>{
       builder.addCase(searchAll.fulfilled,(state,action)=>{
           state.movies=action.payload.results
       
       })
       builder.addCase(searchMovies.fulfilled,(state,action)=>{
           state.movies=action.payload.results
       
       })
       builder.addCase(searchTv.fulfilled,(state,action)=>{
           state.movies=action.payload.results
       
       })
    }
     })
     export default allSearchSlice.reducer