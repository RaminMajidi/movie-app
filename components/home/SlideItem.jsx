'use client'
import ImgLoader from "../imgLoader/ImgLoader";
import AverageStars from "../average/AverageStars";
import BtnReade from "../btnReade/BtnReade";

const SlideItem = ({ id, title, backdrop, overview, average }) => {

    return (
        <>
            <ImgLoader
                alt={title}
                src={backdrop}
                style={'rounded-xl'} />
            <section className="absolute top-0 pl-2 md:top-2
                 md:pl-14 w-full h-full flex flex-col">
                <div className="line-clamp-1 p-1 text-3xl md:text-5xl
                    text-[var(--c-orange)] font-medium"
                    data-swiper-parallax="-600">
                    {title}
                </div>
                <div className="mt-1"
                    data-swiper-parallax="-400">
                    <AverageStars
                        col={false}
                        average={average} />
                </div>
                <div className="line-clamp-2 md:line-clamp-4
                 max-w-md my-2 text-base w-[90%]
                 bg-[rgba(0,0,0,0.5)] p-1 rounded-lg"
                    data-swiper-parallax="-200">
                    {overview}
                </div>
                <div className="mt-1" data-swiper-parallax="-100">
                    <BtnReade
                        classStyle={'text-sm'}
                        title={title}
                        url={`categories/movie/${id}`} />
                </div>
            </section>
        </>
    )

}

export default SlideItem