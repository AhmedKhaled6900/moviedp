import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    movies: [],
    error: ``,
    totalPages: 0
  }

  const FavoriteSlice=createSlice({
    name:"Favorite",
    initialState,
    reducers:{
      Favorite  :(state,action)=>{
        state.movies.push(action.payload)

        console.log(action.payload)
      }

    }
    // extraReducers:(builder)=>{
    //    builder.addCase(PostFavorite.fulfilled,(state,action)=>{
    //        state.movies=action.payload
    //        console.log(action.payload)
    //    })
    // }
     })
     export default FavoriteSlice.reducer
     export const {Favorite} = FavoriteSlice.actions