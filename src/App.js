import logo from './logo.svg';
import './App.css';
import  {  createHashRouter,RouterProvider } from "react-router-dom"
import Root from './layout/root';
function App() {

  const router= createHashRouter([
{
  path:"/",
  element:<Root></Root>

}
  ])
  return (

 <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
