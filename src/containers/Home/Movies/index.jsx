import { useEffect, useState } from "react"
import { Container } from "./styles"
import { getNowPlaying } from "../../../services/getData"
import Slider2 from "../../../components/Slider2"

function Movies () {
    const [newPlaying, setNewPlaying] = useState([])

    useEffect(() => {
        async function getAllData() {

            Promise.all([
                getNowPlaying()
            ])
            .then(([newPlaying ]) => {
                setNewPlaying(newPlaying)
            })
            .catch(error => console.error(error))
        }
        getAllData()
    }, [])

    return (
        
            <Container>
            {newPlaying && <Slider2 info={newPlaying} title={'Tocando agora'} />}
            </Container>
       
    )
}

export default Movies