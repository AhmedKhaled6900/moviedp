import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieDetails } from "../reducers/store/detailsreducer";
import NavBar from "./navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Loader from "./loader";

function DetailsComponent() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.details.movies);
const loading=useSelector((state)=>state.details.loading)

    console.log(data);
    useEffect(() => {
        dispatch(MovieDetails(id));
    }, [id]);
    return (
        <Container fluid className="p-0 m-0 animate__animated animate__fadeIn animate__delay-.5s">

            {
                loading?
                
                <Loader></Loader>:    <Container
                fluid
                className="p-0 m-0 lay-con position-relative"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w500/${data.poster_path}  " )`,
                }}
            >
                <Row className=" p-3 p-lg-5 w-100">
                    <Col className="col-6 z-2  animate__animated animate__fadeIn animate__delay-1s ">
                        <div className="backdrop">
                            <img
                                className=""
                                src={`https://image.tmdb.org/t/p/w500/` + data.backdrop_path}
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col className="col-6 z-2 pt-3 ">
                        <div className="details">
                            <h5> {data.title}</h5>
                            <p> {data.release_date} </p>
                            <h6> {data.popularity} </h6>
                            <p className="d-none d-lg-flex ">{data.overview}</p>
                        </div>
                    </Col>
                    <Col className="z-3">
                    <p className=" pt-3 d-block d-lg-none over-large">{data.overview}</p>
                    
                    </Col>
                </Row>
                <div className="lay "></div>
                <div>
                    <Outlet></Outlet>
                </div>
            </Container>
            }
        
        </Container>
    );
}

export default DetailsComponent;
