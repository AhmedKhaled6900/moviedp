import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchPopularPages } from "../reducers/store/popularreducer";
import { PaginationItem } from "@mui/material";
function Pages() {
    const dispatch = useDispatch();
    const { Page } = useParams();
const data =useSelector((state)=>state.popular.results)

// useEffect(()=>{
//     dispatch(FetchPopularPages(Page))
// },[Page])
// console.log(data)


    return (  
<div>

<h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
  <h1>goooo</h1>
</div>
 
    );
}

export default Pages;