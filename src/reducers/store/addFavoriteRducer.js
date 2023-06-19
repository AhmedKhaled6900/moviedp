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
      Favorite:(state,action)=>{
        state.movies.push(action.payload)
        console.log(action.payload)
      },
      reFavorite:(state,action)=>{
        const index = state.movies.findIndex((item)=>item.id === action.payload.id)
          state.movies.splice(index,1)
      }
    }
     })
     export default FavoriteSlice.reducer
     export const {Favorite,reFavorite} = FavoriteSlice.actions