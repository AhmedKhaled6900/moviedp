import Container from "react-bootstrap/esm/Container";
import NavBar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchTopRated } from "../reducers/topRateedReducer"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Outlet } from "react-router-dom";
import { Popular } from "../reducers/store/popularreducer";
import { Button, ButtonGroup, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useState } from "react";
import { FetchPopularTv } from "../reducers/store/tvReducers/popularTvReducer";
function PopularCarousel({ loader }) {
    const [theMovie, setTheMovie] = useState([])
    const popular = useSelector((state) => state.popular.movies)
    const topRated = useSelector((state) => state.topRated.movies)
    const populartv = useSelector((state) => state.popularTv.movies)
    console.log(topRated)
    console.log(populartv)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            FetchPopularTv()
        )
    }, [dispatch])
    useEffect(() => {
        dispatch(
            Popular()
        )
    }, [dispatch])
    useEffect(() => {
        setTheMovie(popular)
        setMovieTitle("MOVIES")
    }, [popular])
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
    const [moviesTitle, setMovieTitle] = useState("")
    const [activeButton, setActiveButton] = useState('');
    const handleFetchPopular = (button) => {
        setActiveButton(button);
        const buttons = document.querySelectorAll('.popular-cont .btn');
        console.log(buttons)
        buttons.forEach((btn) => {
        btn.classList.remove("active")
        });
        button.target.classList.add("active")
        dispatch(Popular())
        setTheMovie(popular)
        setMovieTitle("MOVIES")
    }
    const handleFetchpopularTv = (button) => {
        setActiveButton(button);
        const buttons = document.querySelectorAll('.popular-cont .btn');
        buttons.forEach((btn) => {
            btn.classList.remove("active")
        });
        button.target.classList.add("active")

        setTheMovie(populartv)
        setMovieTitle("TV ")
    }
    return (
        <Container fluid className="popular-cont mt-5 " >
            <div className="d-flex tabs-container ">
                {
                    moviesTitle === "MOVIES" ? <Link to="movies">
                        <h6 className="f-light m-2 m-lg-4 ">  POPULAR  {moviesTitle}</h6>
                    </Link>
                        : <Link to="TvShows">
                            <h6 className="f-light m-lg-4 m-2 ">  POPULAR  {moviesTitle}</h6>
                        </Link>
                }
                <div className="btns-container   m-lg-4 m-2 ">
                    <Button className="d-flex  animate__animated animate__fadeIn animate__delay-.1s " active={true} onClick={((handleFetchPopular))} >MOVIES </Button>
                    <Button className="d-flex  animate__animated animate__fadeIn animate__delay-.1s " active={false} onClick={((handleFetchpopularTv))}>TV  </Button>
                </div>
            </div>
            <Carousel responsive={responsive}>
                {
 moviesTitle === "MOVIES" ?

                    theMovie.map((movie) => {
                        return (<div className="animate__animated animate__fadeIn animate__delay-.5s " key={movie.id} >
                            
                            <Link to={`Moviedetails/${movie.id}`}>
                            <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
                          
                            </Link>
                            
                            {<Link to={`Moviedetails/${movie.id}`}>
                                <h6 className="p-3"  >{movie.title}</h6>
                            </Link>}
                        </div>
                        )
                    }):  theMovie.map((movie) => {
                        return (<div className="animate__animated animate__fadeIn animate__delay-.5s " key={movie.id} >
                            
                            <Link to={`tv/${movie.id}`}>
                            <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
                          
                            </Link>                            {<Link to={`tv/${movie.id}`}>
                                <h6 className="p-3"  >{movie.name}</h6>
                            </Link>}
                        </div>
                        )
                    })

                }
            </Carousel>;
        </Container>
    );
}

export default PopularCarousel;