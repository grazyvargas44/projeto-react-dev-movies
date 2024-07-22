
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Carousel from "../Carousel"
import {Container, Title} from "./styles"



function Slider2({ info}) {

   
    return (
        <Container>
            <Title>Tocando Agora</Title>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">

                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                       <Carousel item={item} />
                    </SwiperSlide>
                ))}


            </Swiper>
        </Container>
    )
}

export default Slider2