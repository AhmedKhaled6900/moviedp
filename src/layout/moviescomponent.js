import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Popular } from '../reducers/store/popularreducer';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function PopularMovies() {

    const dispath=useDispatch()
    const data =useSelector((state)=>state.popular.movies)
    useEffect(()=>{
        dispath(Popular() )


    },[])

    return ( 
<Container>
<Row>
    {
        data.map((movie)=>{
return (<Col lg={3} className='gap-1 mb-2' key={movie.id}>
    <div className='row card-container  m-2' >
    <div className='col-4 p-0' >
<img className=' ' src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
</div>
<div className='col-8 pt-3'>
        <h5 className=' '  >{movie.title}</h5>
        <p>{movie.release_date}</p>
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
 
 
  {/* <Card className=''

   >
    <div>

    </div>
      <Card.Img className=''  src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} />
      <Card.Body className='' >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
    </Col>)
        })
    }
</Row>



</Container>
     );

}

export default PopularMovies;