import Container from "react-bootstrap/esm/Container";
import NavBar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchTopRated } from "../reducers/topRateedReducer"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Outlet } from "react-router-dom";
import { Popular } from "../reducers/store/popularreducer";
// import Button from "react-bootstrap/esm/Button";
import { Button, ButtonGroup, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useState } from "react";
function PopularCarousel({loader}) {
    const popular = useSelector((state) => state.popular.movies)
const topRated= useSelector((state)=> state.topRated.movies)
 const [theMovie,setTheMovie]=useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Popular())

    }, [dispatch])
    useEffect(()=>{
        setTheMovie(popular)
console.log(popular)
    },[popular])
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
    const [activeButton, setActiveButton] = useState('');
const handleFetchPopular =(button)=>{
    setActiveButton(button);
    const buttons = document.querySelectorAll('.popular-cont .btn');
    console.log(buttons)
    buttons.forEach((btn) => {
      btn.classList.remove("active")
    });
    button.target.classList.add("active")
setTheMovie(popular)

    // dispatch(Popular())
}
const handleFetchTopRated =(button)=>{

    setActiveButton(button);
    const buttons = document.querySelectorAll('.popular-cont .btn');
    console.log(buttons)
    buttons.forEach((btn) => {
      btn.classList.remove("active")
    });
    button.target.classList.add("active")
    // dispatch(FetchTopRated())
    setTheMovie(topRated)

}

       return (  


        <Container fluid className="popular-cont mt-5 pt-5 " >


<div className="btns-container d-flex  ">
<Button   active={true} onClick={(  (handleFetchPopular)  )} >Popular </Button>
<Button  active={false } onClick={ (  (handleFetchTopRated)  )}>Top Rated </Button>

 
    </div>
            <Carousel responsive={responsive}> 
                {
                    theMovie.map((movie) => {
                        return( <div key={movie.id} className="animate__animated animate__fadeIn animate__delay-.5s" ><img className="img-fluid " src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
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