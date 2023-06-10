import logo from './logo.svg';
import './App.css';
import  {  createHashRouter,RouterProvider } from "react-router-dom"
import Root from './layout/root';
import DetailsComponent from "./layout/moviedetails"



function App() {

  const router= createHashRouter([
{
  path:"/",
  element:<Root></Root>,
  children:[
  
  ],


},
{
  path:"Moviedetails/:id",
  element:<DetailsComponent></DetailsComponent>
}
  ])
  return (

 <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
