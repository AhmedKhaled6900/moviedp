import Form from 'react-bootstrap/Form';

import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import { searchAll, searchMovies, searchTv } from '../reducers/store/searchReducer';
import { useState } from 'react';

function Searchall(keyword) {
  const [data,setData]=useState([])

  const [tit,setTit]=useState("all")
const get=useSelector((state)=>state.searchall.movies)
  const dispatch = useDispatch()
  const handlesearch = (keyword) => {

      // if((keyword!=="")){
if(tit==="all"){

  if ((keyword) !== "") {
    ( dispatch(searchAll(keyword)))
    setData(get)
  
  }
  else    setData([])   
}


 
if(tit==="movies"){

  if ((keyword) !== "") {
    ( dispatch(searchMovies(keyword)))
    setData(get)
  
  }

    else   
    setData([])
 

}
if(tit==="tv"){


  if ((keyword) !== "") {
    ( dispatch(searchTv(keyword)))
  setData(get)
  }
  else
  setData([])

  

}

    }

    
    
    // else if 
    //   ( 
    //  tit==="movies"    ( dispatch(searchMovies(keyword)))
    //   )
    // else if 
    //   ( 
    //  tit==="movies"    ( dispatch(searchMovies(keyword)))
    //   )

    
  
  return (
    <Container>
      <Row>
        <div>
          <Form className="d-flex">
            <Form.Control onChange={(e) => handlesearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <div>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button onClick={()=>setTit("all")}>all</Button>
  <Button onClick={()=>setTit("movies")}  >movies</Button>
  <Button onClick={()=>setTit("tv")}  >tv</Button>
</ButtonGroup>
          </div>
        </div>
{
//   (keyword) ==="" ?   <div>
// <h1>search</h1>
//   </div> :

  

    data.map((movie) => {
      return (
        <Col lg={3} className='gap-1 mb-2 col-6 p-0  animate__animated animate__fadeIn animate__delay-.5s' key={movie.id}>
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
                  {/* {
                    theFavorite.find(element => element.id === movie.id) ?
                      <Button className='mt-2' variant="contained" onClick={() => { navigate(`/favorite`) }}
                      > fav </Button>
                      :
                      <Button className='mt-2' variant="contained" onClick={() => {
                        handleaddtofav(movie)
                      }}  > add to fav </Button>
                  } */}
                </div>
              </div>                                                                         </div>
          </div>
        </Col>
  
      )
    })
  
  
  }



        {

        }
        {/* <div className="col ">
              <ReactPaginate
                  breakLabel="...."
                  nextLabel="next >"
                  // onPageChange={loadmore}
                  hrefAllControls={true}
                  pageRangeDisplayed={1}
                  pageCount={pages}
                  previousLabel="< previous"
                  containerClassName='pagination justify-content-center mt-5'
                  pageClassName='page-item'
                  pageLinkClassName='page-link'
                  nextClassName='page-item'
                  previousClassName='page-item'
                  previousLinkClassName='page-link'
                  nextLinkClassName='page-link'
                  breakClassName='page-item'
                  breakLinkClassName='page-link'
                  activeClassName='active'
                  //   initialPage={}
                  disableInitialCallback={false}
              />
          </div> */}
        {/* <div className="btn" onClick={loadmore} > load more</div> */}
      </Row>

      {/* <div>
        <Form className="d-flex">
          <Form.Control onChange={(e) => handlesearch(e.target.value)}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div> */}
    </Container>



  );
}

export default Searchall;

