import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPopularPages, Popular } from '../reducers/store/popularreducer';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link, useNavigate } from 'react-router-dom';
import { Favorite } from '../reducers/store/addFavoriteRducer';
import { Button } from '@mui/material';
function PopularMovies() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.popular.movies)
    const pages = useSelector((state) => state.popular.totalPages)
    const theFavorite = useSelector((state) => state.Favorite.movies)
    const navigate = useNavigate()
    console.log(pages)
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(Popular())
        dispatch(FetchPopularPages(page))
    }, [dispatch, page])
    const loadmore = (data) => {
        setPage(data.selected + 1)
        dispatch(FetchPopularPages(page))
        navigate(`page/${page}`)
    }
    const handleaddtofav = (movie) => {
        dispatch(Favorite(movie))
    }
    return (
        <Container>
            <Row>
                {
                    data.map((movie) => {
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
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
                <div className="col ">
                    <ReactPaginate
                        breakLabel="...."
                        nextLabel="next >"
                        onPageChange={loadmore}
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
                </div>
                <div className="btn" onClick={loadmore} > load more</div>
            </Row>
        </Container>
    );

}

export default PopularMovies;