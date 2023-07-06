'use client'
import BtnReade from "../btnReade/BtnReade";
import { Suspense } from "react";
import Loading from "@/app/Loading";
import AverageStars from "../average/AverageStars";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react"
import ImgLoader from "../imgLoader/ImgLoader"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation ,Autoplay } from "swiper";

const HomeSlider = async ({ data }) => {
    const [sliderData, setSliderData] = useState(data)

    useEffect(() => {
        setSliderData(data)
    }, [data])

    return (
        <>
            {sliderData ? (
                <Suspense fallback={<Loading />}>
                    <Swiper
                    spaceBetween={30}
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        speed={1000}
                        autoplay={{
                            delay:3500,
                            disableOnInteraction:false,
                        }}
                        parallax={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets:true,
                        }}
                        navigation={true}
                        modules={[Parallax, Pagination, Navigation,Autoplay]}
                        className="mySwiper homeSwiper"
                    >
                        {
                            sliderData.map((item) => (
                                <SwiperSlide key={item.id} className="relative rounded-xl" >
                                    <ImgLoader
                                        alt={item.title}
                                        src={item.backdrop_path}
                                        style={'rounded-xl'} />
                                    <section className="absolute top-0 pl-2 md:top-2
                                     md:pl-14 w-full h-full flex flex-col">
                                        <div className="line-clamp-1 p-1 text-2xl md:text-4xl
                                        text-[var(--c-orange)] font-medium"
                                            data-swiper-parallax="-800">
                                            {item.title}
                                        </div>
                                        <div className="mt-1"
                                            data-swiper-parallax="-600">
                                            <AverageStars
                                                col={false}
                                                average={item.vote_average} />
                                        </div>
                                        <div className="mt-1 max-w-[400px]"
                                            data-swiper-parallax="-500">
                                            <p className=" line-clamp-1 md:line-clamp-4 
                                        text-justify bg-[rgba(0,0,0,0.5)]
                                         text-base  md:text-lg  rounded-md max-w-[90%] p-1">
                                                {item.overview}
                                            </p>
                                        </div>
                                        <div className="mt-1" data-swiper-parallax="-300">
                                            <BtnReade 
                                            classStyle={'text-sm'}
                                            title={item.title}
                                            url={`categories/movie/${item.id}`}/>
                                        </div>
                                    </section>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Suspense>

            ) :
                (<p className="text-red-600 text-center">Slidr Not Foun</p>)}

        </>
    )
}

export default HomeSlider