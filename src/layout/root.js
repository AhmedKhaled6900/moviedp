import Container from "react-bootstrap/esm/Container";
import NavBar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchTopRated } from "../reducers/topRateedReducer"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Outlet } from "react-router-dom";
import LayCarousel from "./carousel";
import { Popular } from "../reducers/store/popularreducer";
import PopularCarousel from "./popularcarousel";
import Home from "./home";
function Root() {
    const toprated = useSelector((state) => state.topRated.movies)
    const dispatch = useDispatch()

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    }
    return (
        <Container className="p-0 page-container" fluid  > 
            <NavBar></NavBar>
            <Container fluid className="" >

                {/* <Home></Home> */}
                {/* <h3> Most Pupular This Week</h3> */}
                {/* <LayCarousel responsive={responsive} 
        url={'https://api.themoviedb.org/3/movie/popular?api_key=739517d93a0252fbc4ca80b8cf937f64&language=en-US&page=1'} >

        </LayCarousel> */}
  

        
      
            {/* <Carousel responsive={responsive}>
                {
                    toprated.map((movie) => {
                        return( <div key={movie.id} ><img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
                       <Link to={`Moviedetails/${movie.id}`}>
                       <h6 className="p-3"  >{ movie.title }</h6>
                       </Link>
                        </div>                       
                        )
                    })
                }
            </Carousel>; */}
            </Container>
            <Outlet></Outlet>
        </Container>
    );
}

export default Root;