import Container from "react-bootstrap/esm/Container";
import PopularCarousel from "./popularcarousel";
import TopRatedCarousel from "./topRatedCarousel";
import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Popular, search } from "../reducers/store/popularreducer";
import { Link, Outlet } from "react-router-dom";
import { searchTv } from "../reducers/store/searchReducer";

function Home ({auth}) {
    const authe={auth} 
const data=useSelector((state)=>state.searchall.movies)
console.log (data)
    const dispatch = useDispatch()
    
    // const handlesearch=(keyword)=>{
    //     (keyword) !== "" ? dispatch(searchTv()):

    //     dispatch(search(keyword))
    //         }
return(
    <Container fluid className="p-0">


 <Link to="search">
 
 <Button variant="outline-success">Search</Button>
 
 </Link>
       <Outlet></Outlet>


<PopularCarousel></PopularCarousel>

<TopRatedCarousel></TopRatedCarousel>


    </Container>

     );
}

export default Home;

<h1>home</h1>
