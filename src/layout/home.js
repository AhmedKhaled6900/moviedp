import Container from "react-bootstrap/esm/Container";
import PopularCarousel from "./popularcarousel";
import LayCarousel from "./carousel";
import TopRatedCarousel from "./topRatedCarousel";
function Home () {
return(
    <Container>
<PopularCarousel></PopularCarousel>

{/* <LayCarousel></LayCarousel> */}
<TopRatedCarousel></TopRatedCarousel>
    </Container>

     );
}

export default Home;

<h1>home</h1>
