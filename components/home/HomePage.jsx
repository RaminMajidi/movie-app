'use client'
import Slider from "./Slider";
import SlideItem from "./SlideItem";
import { useState, useEffect } from "react";
import CircleLoading from "../loading/CircleLoading";
import { SwiperSlide } from "swiper/react";



const HomePage = async ({ data }) => {
    const [sliderData, setSliderData] = useState([])

    useEffect(() => {
        setSliderData(data)
    }, [data])

    return (
        <>
            {
                sliderData.length ? (
                    <>
                     <Slider id={'desktop-slider'}>
                        {
                            sliderData.map((item) => (
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

                            ))
                        }
                    </Slider>
                    <Slider id={'mobile-slider'}>
                        {
                            sliderData.map((item) => (
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
                            ))
                        }
                    </Slider>
                    </>
                ) :
                    (<CircleLoading />)
            }
        </>
    )
}

export default HomePage