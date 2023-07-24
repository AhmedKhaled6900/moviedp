import luxon, { Zone } from 'luxon';
import { DateTime } from "luxon";
// import { Duration, humanize } from 'luxon/build/node/luxon';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostFavorite, reFavorite } from '../reducers/store/addFavoriteRducer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link,  useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { redirect } from "react-router-dom";

function FavoriteComponent() {
    // const isauth=useSelector((state)=>state.login)
    // const [auth,setAuth]=useState()
    const isauth=localStorage.getItem("isauth")

// const navigate=useNavigate()
// useEffect(()=>{
   

//     if ( isauth==="false")
// {    navigate("/")}
    
// },[])
 
// console.log(isauth)
const data=useSelector((state)=>state.Favorite.movies)
const dispatch=useDispatch()
const [addedAt, setAddedAt] = useState(null);
const nodata=Array.from(data)


const handledelete=(movie)=>{
dispatch(reFavorite(movie))
}
const now = DateTime.now();

const [time, setTime] = useState(now.toLocaleString());
    return ( 
        <Container className='h-100v'>
            <Row>
                { nodata.length === 0? 
                <div className='no-movies text-center ' >
 <div className=' no-moviestext ' >
                <h1> NO MOVIES  </h1>
                    <h3> ADD YOUR FAVORITE MOVIES <br /> TO BE SHOWN HERE </h3>
                </div>
 
                </div>
                :
                    data.map((movie) => {
                        return (
                                <Col lg={3} className='gap-1 mb-2 ' key={movie.id}>
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
                                        {/* {
                                            theFavorite.find(element => element.id === movie.id) ?
                                                <Button onClick={() => { navigate(`/favorite`) }}
                                                > fav </Button>
                                                :
                                                <Button onClick={() => {
                                                    handleaddtofav(movie)
                                                }}  > add to fav </Button>
                                        } */}
                                        
                                    </div>
                                </div>
                            <Button  onClick={()=>handledelete(movie)}  > delete</Button>

                            </Col>
                        )
                    })
                }
                <div className="col ">
                    {/* <ReactPaginate
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
                    /> */}
                </div>
                {/* <div className="btn" onClick={loadmore} > load more</div> */}
            </Row>
        </Container>

     );
}

export default FavoriteComponent;