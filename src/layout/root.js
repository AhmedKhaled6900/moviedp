import Container from "react-bootstrap/esm/Container";
import NavBar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchTopRated } from "../reducers/topRateedReducer"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Progress from "./progress";
function Root() {

    const toprated = useSelector((state) => state.topRated.movies)
    console.log(toprated)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            FetchTopRated()
        )

    }, [dispatch])

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    }
    return (
        <Container className="p-0 page-container" fluid  >

          
            <NavBar></NavBar>
            <Container fluid className="top-rated-cont mt-5 pt-5" >
                <h3> Most Pupular This Week</h3>
            <Carousel responsive={responsive}>
                {
                    toprated.map((movie) => {
                        return( <div><img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path} alt="" />
                        <h5 className="p-3"  >{ movie.title }</h5>
                        {/* <Progress></Progress> */}
                        </div> 
                       
                        )
                    })
                }

            </Carousel>;
            </Container>
            {/* <div className="lay-out"></div> */}
        </Container>
    );
}

export default Root;