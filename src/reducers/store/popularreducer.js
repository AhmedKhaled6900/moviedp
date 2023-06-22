import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
export const Popular = createAsyncThunk("movies/popular",async(url)=>{
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1'
    )
    .then((res)=>{
        return res.data
    })
})
export const FetchPopularPages = createAsyncThunk("popular/popularpages",async(page)=>{
    return axios.get(` https://api.themoviedb.org/3/movie/popular?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=${page}`
    )
    .then((res)=>{
        return res.data
    })
})

export const search = createAsyncThunk("search/allsearch",async(keyword)=>{
    return  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1&query=${keyword}`

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

    const PopularSlice=createSlice({
    name:"popular",
    initialState,
    extraReducers:(builder)=>{
       builder.addCase(Popular.fulfilled,(state,action)=>{
           state.movies=action.payload.results
           state.totalPages=action.payload.total_pages
 
          
       })
       builder.addCase(FetchPopularPages.fulfilled,(state,action)=>{
        state.movies=action.payload.results
        state.totalPages=action.payload.total_pages
          
       })

   
        builder.addCase(search.fulfilled,(state,action)=>{
            state.movies = action.payload.results
            console.log(action.payload)
        })

    }
     })
     export default PopularSlice.reducer