'use client'
import Link from "next/link";
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
import { Parallax, Pagination, Navigation } from "swiper";

const HomeSlider = async ({ data }) => {
    const [modeScreen, setModetScreen] = useState('')
    const [sliderData, setSliderData] = useState(data)

    useEffect(() => {
        setSliderData(data)
    }, [data])

    useEffect(()=>{
        const w = window.innerHeight;
        const h = window.innerWidth;
        w>h ? setModetScreen("Horizontal") : setModetScreen('Vertical')
    },[])


    useEffect(() => {
        window.addEventListener('resize', (e) => {
            if ((window.innerWidth - window.innerHeight) < 0 && modeScreen != "Vertical") {
                setModetScreen('Vertical')
            }
            if ((window.innerHeight - window.innerWidth) < 0 && modeScreen != "Horizontal") {
                setModetScreen('Horizontal')
            }
        })

    }, [])

    return (
        <>
            {sliderData ? (
                <Suspense fallback={<Loading />}>
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
                                        src={modeScreen === "Horizontal" ? item.backdrop_path : item.poster_path}
                                        style={'rounded-xl'} />
                                    <section className="absolute top-2 pl-3 md:top-2
                                     md:pl-14 w-full h-full flex flex-col">
                                        <div className="title text-[var(--c-orange)] text-4xl
                                         md:text-4xl line-clamp-1 p-1 "
                                            data-swiper-parallax="-800">
                                            {item.title}
                                        </div>
                                        <div className="subtitle mt-1"
                                            data-swiper-parallax="-600">
                                            <AverageStars
                                                col={false}
                                                average={item.vote_average} />
                                        </div>
                                        <div className="text mt-1"
                                            data-swiper-parallax="-500">
                                            <p className=" line-clamp-1 md:line-clamp-4 
                                        text-justify bg-[rgba(0,0,0,0.5)]
                                         text-lg  rounded-md max-w-[90%] p-1">
                                                {item.overview}
                                            </p>
                                        </div>
                                        <div className="text mt-1" data-swiper-parallax="-300">
                                            <Link
                                                href={`categories/movie/${item.id}`}
                                                title={item.title}
                                                className="bg-[var(--c-lblue)] px-3 py-2
                                                 mt-1 rounded-md 
                                                  hover:bg-[var(--c-blue)]
                                                   transition-all inline-block"
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
                </Suspense>

            ) :
                (<p className="text-red-600 text-center">Slidr Not Foun</p>)}

        </>
    )
}

export default HomeSlider