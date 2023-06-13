import { applyMiddleware, combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";import FetchTopRated from "../topRateedReducer"
import  MovieDetails  from "./detailsreducer";
import Popular  from "./popularreducer";
import   FetchPopularTv   from "./tvReducers/popularTvReducer";
import  FetchTopRatedTv  from "./tvReducers/topRatedTvReducer";
import  FetchTvDetails  from "./tvReducers/tvdetailsreducer";
export default configureStore({
    reducer:{ 
        topRated:FetchTopRated,
        details :MovieDetails,
        popular: Popular,
        popularTv:FetchPopularTv,
        topRatedTv :FetchTopRatedTv,
        tvDetails :FetchTvDetails
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})