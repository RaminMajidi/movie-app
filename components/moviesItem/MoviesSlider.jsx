'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import ImgLoader from "../imgLoader/ImgLoader";
import AverageStars from "../average/AverageStars";
import { useEffect, useState } from "react";
import Link from "next/link";

const MoviesSlider = async ({ data, subUrl }) => {
    const [slides, setSlides] = useState(data?.results)

    useEffect(() => {
        setSlides(data?.results)
    }, [data])

    return (
       
        <>
            {
                slides ? (
                    <>
                        <div className=" rounded-xl mb-10">
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
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                modules={[EffectCoverflow, Pagination]}
                                className="movieSwiper"
                            >
                                {
                                    slides.map((item) => {
                                        if(item.poster_path){
                                            return(
                                                <SwiperSlide key={item.id}>
                                            {
                                                <div className="relative w-full h-full group">
                                                    <ImgLoader
                                                    style={'rounded-xl'}
                                                        key={item.title}
                                                        alt={item.title}
                                                        src={item.poster_path}
                                                    />
                                                    <div className="rounded-xl absolute z-10
                                                     bg-[var(--c-gray)]  flex-col
                                                      justify-center items-center top-0 left-0
                                                       w-full h-full hidden opacity-0 transition-all
                                                        group-hover:flex group-hover:opacity-95">
                                                        <h3 className="text-[var(--c-black)]
                                                         p-2 text-center font-bold">
                                                            {item.title || item.name}
                                                        </h3>
                                                        <AverageStars
                                                            average={item.vote_average}
                                                            col={true} />
                                                        <Link 
                                                            href={`/categories/${subUrl}/${item.id}`}
                                                            title={item.title}
                                                            className="bg-[var(--c-lblue)] px-2 
                                                         py-1 rounded-md hover:bg-[var(--c-blue)] 
                                                         transition-all mt-5">
                                                            Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            }
                                        </SwiperSlide>
                                            )
                                        }
                                    })
                                }
                            </Swiper >
                        </div>
                    </>
                ) : (
                    <div>
                        <p>Sory Not Found</p>
                        <Link href={'/'}
                        className="px-6 rounded-md my-3 py-1 bg-[var(--c-lblue)] 
                        hover:bg-[var(--c-blue)] transition-all"
                        >Go Home</Link>
                    </div>
                )
            }

        </>
    )
}

export default MoviesSlider