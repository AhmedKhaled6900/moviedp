import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
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
        data.map((movie)=>{
           

return (


<Col lg={3} className='gap-1 mb-2' key={movie.id}>
    <div className='row card-container  m-2' >
    <div className='col-4  col-lg-12   p-0' >
<Link to={`/moviedetails/${movie.id}`} >
<img className=' ' src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
</Link>
</div>
<div className='col-8 info-container col-lg-12 pt-3'>
<Link to={`/moviedetails/${movie.id}`} >
<h5 className=' '  >{movie.title}</h5>
</Link>
        <p>{movie.release_date}</p>
        <div className='d-flex '>
    <h5 className='pe-2'  >  {movie.vote_count}</h5>  <p> Total Votes</p>  
        </div>
        <div className='d-flex '>
        <p className='pe-2'>Votes Average</p> 
    <h5   >  {movie.vote_average}
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
  



  {/* <Helper movie={movie} ></Helper> */}

    </div>


  
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