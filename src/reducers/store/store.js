import { applyMiddleware, combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";import FetchTopRated from "../topRateedReducer"
import  MovieDetails  from "./detailsreducer";
import Popular from "./popularreducer";

import  search   from "./popularreducer";
import   FetchPopularPages   from "./popularreducer";
import  FetchPopularTv   from "./tvReducers/popularTvReducer";
import  FetchTopRatedTv  from "./tvReducers/topRatedTvReducer";
import  FetchTvDetails  from "./tvReducers/tvdetailsreducer";

import   Favorite    from "./addFavoriteRducer";
import   reFavorite     from "./addFavoriteRducer";

// import search  from "./searchReducer";
// import addFavoriteRducer from "./addFavoriteRducer";
// import    addToFavorite   from "./addFavoriteRducer";

export default configureStore({
    reducer:{ 
        topRated:FetchTopRated,
        details :MovieDetails,
        popular: Popular,
        popularTv:FetchPopularTv,
        topRatedTv :FetchTopRatedTv,
        tvDetails :FetchTvDetails,
        popularpages:FetchPopularPages,
        Favorite : Favorite,
        reFavorite:reFavorite,
        allsearch:search
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})