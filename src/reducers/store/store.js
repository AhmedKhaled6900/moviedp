import { applyMiddleware, combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";import FetchTopRated from "../topRateedReducer"
import  MovieDetails  from "./detailsreducer";
import Popular  from "./popularreducer";
export default configureStore({
    reducer:{ 
        topRated:FetchTopRated,
        details :MovieDetails,
        popular: Popular
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})