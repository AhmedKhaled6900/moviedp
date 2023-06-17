import Container from "react-bootstrap/esm/Container";
import PopularCarousel from "./popularcarousel";
import LayCarousel from "./carousel";
import TopRatedCarousel from "./topRatedCarousel";
import Loader from "./loader";
function Home () {
return(
    <Container fluid className="p-0">

<PopularCarousel></PopularCarousel>

<TopRatedCarousel></TopRatedCarousel>


    </Container>

     );
}

export default Home;

<h1>home</h1>
