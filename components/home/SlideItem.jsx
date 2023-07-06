'use client'
import ImgLoader from "../imgLoader/ImgLoader";
import AverageStars from "../average/AverageStars";
import BtnReade from "../btnReade/BtnReade";

const SlideItem = ({ id, title, backdrop, average }) => {

    return (
        <>
            <ImgLoader
                alt={title}
                src={backdrop}
                style={'rounded-xl'} />
            <section className="absolute top-0 pl-2 md:top-2
                 md:pl-14 w-full h-full flex flex-col">
                <div className="line-clamp-1 p-1 text-2xl md:text-4xl
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
                <div className="mt-1" data-swiper-parallax="-200">
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