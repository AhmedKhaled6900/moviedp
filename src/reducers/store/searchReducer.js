import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
export const search = createAsyncThunk("search/allsearch",async(keyword)=>{
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1&query=${keyword}&include_adult=false`

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

  const SearchSlice=createSlice({
    name:"allsearch",
    initialState,
    extraReducers:
    
    (builder)=>{
       builder.addCase(search.fulfilled,(state,action)=>{
           state.movies=action.payload.results
       
       })
    }
     })
     export default SearchSlice.reducer