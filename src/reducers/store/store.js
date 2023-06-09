import { applyMiddleware, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";import FetchTopRated from "../topRateedReducer"
export default configureStore({
    reducer:{ 
        topRated:FetchTopRated
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})