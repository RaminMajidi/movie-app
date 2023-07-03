'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { useRouter } from "next/navigation"
import ImgLoader from "../imgLoader/ImgLoader";
import AverageStars from "../average/AverageStars";
import { useEffect, useState } from "react";



const MoviesSlider = async ({ data, subUrl }) => {
    const [slides, setSlides] = useState()
    const router = useRouter();

    useEffect(() => {
        setSlides(data)
    }, [data])

    return (
        <>
            {
                slides ? (
                    <>
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
                                className="movieSwiper"
                            >
                                {
                                    slides.map((item, index) => (
                                        <SwiperSlide key={item.id}>
                                            {
                                                <div className="relative w-full h-full group">
                                                    <ImgLoader
                                                        key={item.title}
                                                        alt={item.title}
                                                        src={item.poster_path}
                                                    />
                                                    <div className="rounded-xl absolute z-10
                                                     bg-[var(--c-gray)] flex flex-col
                                                      justify-center items-center top-0 left-0
                                                       w-full h-full opacity-0 transition-all
                                                        group-hover:opacity-95">
                                                        <h3 className="text-[var(--c-black)]
                                                         p-2 text-center font-bold">
                                                            {item.title || item.name}
                                                        </h3>
                                                        <AverageStars
                                                            average={item.vote_average}
                                                            col={true} />
                                                        <button
                                                            title={item.title}
                                                            onClick={
                                                                () => router.push(`/${subUrl}/${item.id}`)
                                                            }
                                                            className="bg-[var(--c-lblue)] px-2 
                                                         py-1 rounded-md hover:bg-[var(--c-blue)] 
                                                         transition-all mt-5">
                                                            Read More
                                                        </button>

                                                    </div>
                                                </div>
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