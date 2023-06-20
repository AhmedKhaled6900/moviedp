import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link, useNavigate } from 'react-router-dom';
import { FetchPopularTv } from '../../reducers/store/tvReducers/popularTvReducer';
import { Button } from '@mui/material';
import { Favorite } from '../../reducers/store/addFavoriteRducer';

function PopularTvShows() {
    const dispath=useDispatch()
    const data =useSelector((state)=>state.popularTv.movies)
    const theFavorite =useSelector((state)=>state.Favorite.movies )
    console.log(data)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispath(FetchPopularTv() )
    },[])

    const handleaddtofav = (movie) => {
        dispatch(Favorite(movie))
    }
    return ( 
<Container>
<Row>
{
                    data.map((movie) => {
                        return (
                            <Col lg={3} className='gap-1 mb-2 col-6' key={movie.id}>
                                <div className='row card-container  m-2' >
                                        <div className='img-cont p-0' > 
                                        <Link to={`/tv/${movie.id}`} >
                                            <img className=' ' src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
                                        </Link>
                                        <div className='info-container p-0 m-0  '>
                                            <div className='cont '>
                                            <Link to={`/tv/${movie.id}`} >
                                            <p className='fw-bolder title p-0 m-0 '  >{movie.name}</p>
                                        </Link>
                                        <p className='p-0 m-0 '>{movie.first_air_date}</p>                                        
                                        <div className='d-flex justify-content-center p-0 m-0  '>
                                            <p className='pe-2 p-0 m-0 '>Votes</p>
                                            <h5 className='p-0 m-0 title '  >  {movie.vote_average}
                                            </h5>
                                        </div>
                                        {
                                            theFavorite.find(element => element.id === movie.id) ?
                                                <Button className='mt-2' variant="contained" onClick={() => { navigate(`/favorite`) }}
                                                > fav </Button>
                                                :
                                                <Button  className='mt-2' variant="contained" onClick={() => {
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

export default PopularTvShows;