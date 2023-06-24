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
                        <div className="flex px-4 pt-6 justify-between
                         text-[var(--c-gray)]">
                            <h2 className="font-bold tracking-widest">
                                {title}
                            </h2>
                            <button className="bg-[var(--c-lblue)]
                             text-[var(--c-white)] px-2 py-1
                              rounded-md hover:bg-[var(--c-blue)] transition-all">
                                See All
                            </button>
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
                                                         p-2 text-center">
                                                            {item.title}
                                                        </h3>
                                                        <button
                                                            title={item.title}
                                                            onClick={
                                                                () => router.push(`/movies/${item.id}`)
                                                            }
                                                            className="bg-[var(--c-lblue)] px-2 
                                                         py-1 rounded-md hover:bg-[var(--c-blue)] 
                                                         transition-all">
                                                            Read More
                                                        </button>
                                                        <p className="text-center p-4
                                                         text-[var(--c-black)] font-bold">
                                                            {item.vote_average}
                                                        </p>
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