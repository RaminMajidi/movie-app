'use client'
import Slider from "./Slider";
import SlideItem from "./SlideItem";
import { useState, useEffect, Suspense } from "react";
import Loading from "@/app/Loading";
import { SwiperSlide } from "swiper/react";


const HomeBaner = async ({ data }) => {
    const [sliderData, setSliderData] = useState([])

    useEffect(() => {
        setSliderData(data)
    }, [data])

    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Slider id={'desktop-slider'}>
                    {
                        sliderData.map((item) => {
                            if (item.backdrop_path) {
                                return (
                                    <SwiperSlide key={item.id} className="relative rounded-xl" >
                                        <SlideItem
                                            key={item.id}
                                            id={item.id}
                                            backdrop={item.backdrop_path}
                                            average={item.vote_average}
                                            overview={item.overview}
                                            title={item.title || item.name}
                                        />
                                    </SwiperSlide>
                                )
                            }
                        })
                    }
                </Slider>
                <Slider id={'mobile-slider'}>
                    {
                        sliderData.map((item) => {
                            if (item.poster_path) {
                                return (
                                    <SwiperSlide key={item.id}
                                        className="relative rounded-xl" >
                                        <SlideItem
                                            key={item.id}
                                            id={item.id}
                                            backdrop={item.poster_path}
                                            average={item.vote_average}
                                            overview={item.overview}
                                            title={item.title || item.name}
                                        />
                                    </SwiperSlide>
                                )
                            }
                        })
                    }
                </Slider>
            </Suspense>
        </>
    )
}

export default HomeBaner