'use client'
import AverageStars from "../average/AverageStars";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react"
import ImgLoader from "../imgLoader/ImgLoader"
import { useRouter } from "next/navigation"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";



const HomeSlider = async (props) => {

    const router = useRouter();
    const [data, setData] = useState()

    useEffect(() => {
        console.log(props)
        setData(props.data?.results)
    }, [props])

    return (
        <>
            {
                data ? (
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
                            data.map((item) => (
                                <SwiperSlide key={item.id} className="relative rounded-xl" >
                                    <ImgLoader
                                        alt={item.title}
                                        src={item.backdrop_path}
                                        style={'rounded-xl'} />
                                    <section className="absolute top-1 pl-12 w-full ">
                                        <div className="title text-[var(--c-orange)]"
                                            data-swiper-parallax="-800">
                                            {item.title}
                                        </div>
                                        <div className="subtitle" data-swiper-parallax="-600">
                                            <AverageStars
                                                col={false}
                                                average={item.vote_average} />
                                        </div>
                                        <div className="text" data-swiper-parallax="-500">
                                            <p className="text-justify bg-[rgba(0,0,0,0.5)] text-base mt-2
                                             p-2 rounded-md">
                                                {item.overview}
                                            </p>
                                            <button
                                                onClick={() => router.push(`/movie/${item.id}`)}
                                                title={item.title}
                                                className="bg-[var(--c-lblue)] px-4 py-2
                                                 mt-4 rounded-md hover:bg-[var(--c-blue)]
                                                  transition-all"
                                                type="button"
                                            >
                                                Reade More
                                            </button>
                                        </div>
                                    </section>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                ) : (
                    <h2 className="text-center text-red-600">
                        Slider Not Found
                    </h2>
                )
            }

        </>
    )
}

export default HomeSlider