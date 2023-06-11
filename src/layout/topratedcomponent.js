import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
// import { Popular } from '../reducers/store/popularreducer';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FetchTopRated } from '../reducers/topRateedReducer';

function TopRatedMovies() {

    const dispath=useDispatch()
    const data =useSelector((state)=>state.topRated.movies)
    console.log(data)
    useEffect(()=>{
        dispath(FetchTopRated() )
    },[])

    return ( 
<Container>
<Row>
    {
        data.map((movie)=>{
return (<Col key={movie.id}>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>)
        })
    }


</Row>



</Container>
     );

}

export default TopRatedMovies;