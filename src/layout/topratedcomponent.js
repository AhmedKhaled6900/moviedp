import { useEffect } from 'react';
import { Button } from '@mui/material';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import  {FetchTopRated}  from '../reducers/topRateedReducer';
import { Link, useNavigate } from 'react-router-dom';
import  {Favorite}  from '../reducers/store/addFavoriteRducer';
import Helper from './helper';
function TopRatedMovies() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const data =useSelector((state)=>state.topRated.movies)
    const theFavorite =useSelector((state)=>state.Favorite.movies )
console.log(theFavorite)

    const handleaddtofav = (movie) => {
        dispatch(Favorite(movie))
    }
    useEffect(()=>{
        dispatch(FetchTopRated() )
    },[dispatch])



    return ( 
<Container>
<Row>
{
                    data.map((movie) => {
                        return (
                            <Col lg={3} className='gap-1 mb-2 col-6 p-0' key={movie.id}>
                                <div className='row card-container  m-2' >
                                        <div className='img-cont p-0' > 
                                        <Link to={`/moviedetails/${movie.id}`} >
                                            <img className=' ' src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
                                        </Link>
                                        <div className='info-container p-0 m-0  '>
                                            <div className='cont '>
                                            <Link to={`/moviedetails/${movie.id}`} >
                                            <p className='fw-bolder title p-0 m-0 '  >{movie.title}</p>
                                        </Link>
                                        <p className='p-0 m-0 '>{movie.release_date}</p>                                        
                                        <div className='d-flex justify-content-center p-0 m-0  '>
                                            <p className='pe-2 p-0 m-0 '>Votes</p>
                                            <h5 className='p-0 m-0 title '  >  {movie.vote_average}
                                            </h5>
                                        </div>
                                        {
                                            theFavorite.find(element => element.id === movie.id) ?
                                                <Button onClick={() => { navigate(`/favorite`) }}
                                                > fav </Button>
                                                :
                                                <Button onClick={() => {
                                                    handleaddtofav(movie)
                                                }}  > add to fav </Button>
                                        }
                                            </div>                                   
                                    </div>                                                                         </div>
                                </div>
                            </Col>
  
                        )
                    })
                }
</Row>



</Container>
     );
}
export default TopRatedMovies;