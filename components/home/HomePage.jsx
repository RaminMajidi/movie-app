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
                    <Slider>
                        {
                            sliderData.map((item) => (
                                <SwiperSlide key={item.id} className="relative rounded-xl" >
                                    <SlideItem
                                        key={item.id}
                                        id={item.id}
                                        backdrop={item.backdrop_path}
                                        average={item.vote_average}
                                        title={item.title || item.name}
                                    />
                                </SwiperSlide>

                            ))
                        }
                    </Slider>
                ) :
                    (<CircleLoading />)
            }
        </>
    )
}

export default HomePage