import './App.css';
import  {  createHashRouter,RouterProvider } from "react-router-dom"
import Root from './layout/root';
import DetailsComponent from "./layout/moviedetails"
import PopularMovies from './layout/moviescomponent';
import Home from './layout/home';
import TopRatedMovies from './layout/topratedcomponent';
import PopularTvShows from './layout/tvcomponents/popularTvComponent';
import TopRatedTvShows from './layout/tvcomponents/topRatedTvComponent';
import TVDetailsComponent from './layout/tvcomponents/tvdetails';
import Pages from './layout/pages';
import FavoriteComponent from './layout/favoriteComponent';
import Searchall from './layout/searchall';

function App() {
  const router= createHashRouter([
{
  path:"/",
  element:<Root></Root>,
  children:[
    {
      path :"/",
      element: <Home></Home>,
      children:[
{        path:"search",
element:  <Searchall></Searchall>
}        
      ]
      
    },

    {
      path:"favorite",
      element:<FavoriteComponent></FavoriteComponent>
    },
    {
      
        path:"moviedetails/:id",
        element:<DetailsComponent></DetailsComponent>
      
    },

    {
path:"tv/:id",
element:<TVDetailsComponent></TVDetailsComponent>
    },

    {
      path :"movies",
      element: <PopularMovies></PopularMovies>,
     
      children:[
        {

            path:"page/:page",
            element:<Pages></Pages>
          },

      ]
  
    },
  

     
{        path:"topRated",
element:<TopRatedMovies></TopRatedMovies>
},

  {

    path:"TvShows",
    element:<PopularTvShows/>
  },
  {
    path:"topRatedTv",
    element:<TopRatedTvShows></TopRatedTvShows>
  }
   
  ],
},



  ])
  return (

 <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
