import { applyMiddleware, combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";import FetchTopRated from "../topRateedReducer"
import  MovieDetails  from "./detailsreducer";
import Popular  from "./popularreducer";
import   FetchPopularTv   from "./tvReducers/popularTvReducer";
export default configureStore({
    reducer:{ 
        topRated:FetchTopRated,
        details :MovieDetails,
        popular: Popular,
        popularTv:FetchPopularTv
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})