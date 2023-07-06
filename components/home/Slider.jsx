'use client'
import { Swiper} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

const Slider = ({ children }) => {

    return (
        <Swiper
            spaceBetween={30}
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            speed={800}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            parallax={true}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper homeSwiper"
        >
            {children}
        </Swiper>
    )

}

export default Slider

