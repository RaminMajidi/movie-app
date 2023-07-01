'use client'
import Link from "next/link";
import AverageStars from "../average/AverageStars";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react"
import ImgLoader from "../imgLoader/ImgLoader"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

const HomeSlider = async ({ data }) => {
    const [sliderData, setSliderData] = useState(data)
    useEffect(() => {
        setSliderData(data)
    }, [data])

    return (
        <>
            {sliderData ? (
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    speed={1000}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper homeSwiper"
                >
                    {
                        sliderData.map((item) => (
                            <SwiperSlide key={item.id} className="relative rounded-xl" >
                                <ImgLoader
                                    alt={item.title}
                                    src={item.backdrop_path}
                                    style={'rounded-xl'} />
                                <section className="absolute top-0 pl-2 md:top-2 md:pl-14 w-full ">
                                    <div className="title"
                                        data-swiper-parallax="-800">
                                        <h2 className="text-[var(--c-orange)]">{item.title}</h2>
                                    </div>
                                    <div className="subtitle" data-swiper-parallax="-600">
                                        <AverageStars
                                            col={false}
                                            average={item.vote_average} />
                                    </div>
                                    <div className="text line-clamp-3" data-swiper-parallax="-500">
                                        <p className="line-clamp-3 text-justify bg-[rgba(0,0,0,0.5)]
                                         text-lg mt-1 p-1 rounded-md max-w-[80%]">
                                            {item.overview}
                                        </p>
                                        <Link
                                            href={`/movie/${item.id}`}
                                            title={item.title}
                                            className="bg-[var(--c-lblue)] px-4 py-2
                                   mt-3 rounded-md hover:bg-[var(--c-blue)]
                                    transition-all"
                                            type="button"
                                        >
                                            Reade More
                                        </Link>
                                    </div>
                                </section>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            ) :
                (<p className="text-red-600 text-center">Slidr Not Foun</p>)}

        </>
    )
}

export default HomeSlider