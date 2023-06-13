import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from 'react-router-dom';
import { FetchTopRatedTv } from '../../reducers/store/tvReducers/topRatedTvReducer';

function TopRatedTvShows() {
    const dispath=useDispatch()
    const data =useSelector((state)=>state.topRatedTv.movies)
    useEffect(()=>{
        dispath(FetchTopRatedTv() )
    },[])
    return ( 
<Container>
<Row>
    {
        data.map((movie)=>{
return (

<Col lg={3} className='gap-1 mb-2' key={movie.id}>
    <div className='row card-container  m-2' >
    <div className='col-4  col-lg-12   p-0' >
<Link to={`/tv/${movie.id}`} >
<img className=' ' src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
</Link>
</div>
<div className='col-8 info-container col-lg-12 pt-3'>
<Link to={`/tv/${movie.id}`} >
<h5 className=' '  >{movie.name}</h5>
</Link>
        <p>{movie.first_air_date}</p>
        <div className='d-flex '>
    <h5 className='pe-2'  >  {movie.vote_count}</h5>  <p> Total Votes</p>  
        </div>
        <div className='d-flex '>
        <p className='pe-2'>Votes Average</p> 
    <h5   >  {movie.vote_average}
</h5> 
        </div>
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

export default TopRatedTvShows;