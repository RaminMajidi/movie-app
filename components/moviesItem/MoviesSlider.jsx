'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { useRouter } from "next/navigation"
import ImgLoader from "../imgLoader/ImgLoader";


const MoviesSlider = async ({ data, title }) => {
    const router = useRouter();

    return (
        <>
            {
                data ? (
                    <>
                        <div className="flex px-4 pt-2 justify-between text-[var(--c-gray)]">
                            <h2>{title}</h2>
                            <button className="bg-[var(--c-lblue)] text-[var(--c-white)] px-2 py-1 rounded-md hover:bg-[var(--c-blue)] transition-all">See All</button>
                        </div>
                        <div className="">
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    data.map((item, index) => (
                                        <SwiperSlide key={item.id}>
                                            {
                                                <>
                                                    <ImgLoader
                                                        key={item.title}
                                                        alt={item.title}
                                                        src={item.poster_path}

                                                    />
                                                </>
                                            }
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper >
                        </div>
                    </>
                ) : (null)
            }

        </>
    )
}

export default MoviesSlider