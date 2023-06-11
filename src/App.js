import logo from './logo.svg';
import './App.css';
import  {  createHashRouter,RouterProvider } from "react-router-dom"
import Root from './layout/root';
import DetailsComponent from "./layout/moviedetails"
import PopularMovies from './layout/moviescomponent';
import PopularCarousel from './layout/popularcarousel';
import LayCarousel from './layout/carousel';
import Home from './layout/home';



function App() {

  const router= createHashRouter([
{
  path:"/",
  element:<Root></Root>,
  children:[
    {
      path :"/",
      element: <Home></Home>
      
    },
    {
      path :"movies",
      element: <PopularMovies></PopularMovies>
      
    },
  ],
},


// {
//   path:"Moviedetails/:id",
//   element:<DetailsComponent></DetailsComponent>
// }
  ])
  return (

 <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
