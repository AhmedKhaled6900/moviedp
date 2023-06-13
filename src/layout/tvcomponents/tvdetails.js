import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { FetchTvDetails } from "../../reducers/store/tvReducers/tvdetailsreducer";

function TVDetailsComponent() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.tvDetails.movies);
    console.log(data);
    useEffect(() => {
        dispatch(FetchTvDetails(id));
    }, [id]);
    return (
        <Container fluid className="p-0 m-0 animate__animated animate__fadeIn animate__delay-.5s">
            <Container
                fluid
                className="p-0 m-0 lay-con position-relative"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w500/${data.poster_path}  " )`,
                }}
            >
                <Row className="pt-5 w-100">
                    <Col className="col-6 z-2  animate__animated animate__fadeIn animate__delay-1s ">
                        <div className="backdrop">
                            <img
                                className="img-fluid"
                                src={`https://image.tmdb.org/t/p/w500/` + data.backdrop_path}
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col className="col-6 z-2">
                        <div className="details">
                            <h5> {data.name}</h5>
                            <p> {data.release_date} </p>
                            <h6> {data.popularity} </h6>
                        </div>
                    </Col>
                </Row>
                <div className="lay "></div>
                <div>
                    <Outlet></Outlet>
                </div>
            </Container>
        </Container>
    );
}

export default TVDetailsComponent;
