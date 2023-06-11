import Container from "react-bootstrap/esm/Container";
import NavBar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchTopRated } from "../reducers/topRateedReducer"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Outlet } from "react-router-dom";
import { Popular } from "../reducers/store/popularreducer";
function PopularCarousel({loader}) {
    const popular = useSelector((state) => state.popular.movies)

    const dispatch = useDispatch()
    useEffect(() => {
     
        dispatch(
Popular()
        )
    }, [dispatch])
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


        <Container fluid className="popular-cont mt-5 pt-5" >
                {/* <h3> Most Pupular This Week</h3> */}
            <Carousel responsive={responsive}> 
                {
                    popular.map((movie) => {
                        return( <div key={movie.id} ><img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
                       <Link to={`Moviedetails/${movie.id}`}>
                       <h6 className="p-3"  >{ movie.title }</h6>
                       </Link>
                        </div>                       
                        )
                    })
                }
            </Carousel>;
            </Container>
    );
}

export default PopularCarousel;