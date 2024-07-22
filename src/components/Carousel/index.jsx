import { Container } from "./styles"
import { getImages } from "../../utils/getImages"

function Carousel({item }) {

        return(
            <Container>
               <img src={getImages(item.backdrop_path || item.profile_path || '')}/>
            </Container>
        )
}

export default Carousel