'use client'
import { useEffect, useState } from "react"
import ImgLoader from "../imgLoader/ImgLoader"
import { useRouter } from "next/navigation"


const HomeSlider = (props) => {
    const router = useRouter();
    const [data, setData] = useState(props.data?.results)
    const [active, setActive] = useState(0)
    const [cover, setCover] = useState(data ? data[0]?.backdrop_path : '')

    const sliderHandeler = (i) => {
        setActive(i)
        setCover(data[i].backdrop_path)
    }

    return (
        <>
            {
                data ? (
                    <div className="relative w-full h-[88vh]">
                        <ImgLoader src={cover} style={"rounded-xl transition-all"} alt="Bg-slider" />
                        <div className="absolute top-2 left-2">
                            <h3 className="bg-gray-600 mt-2 px-3 py-2 w-[260px] md:w-max truncate rounded-lg text-xs md:text-base">Title : <span>{data[active].title}</span></h3>
                            <h3 className="bg-gray-600 mt-2 px-3 py-2 w-max rounded-lg text-xs md:text-base">Score : <span>{data[active].vote_average}</span></h3>
                            <button className="bg-blue-500 mt-2 px-3 py-2 w-max rounded-lg text-xs md:text-base" onClick={() => { router.push(`/movies/${data[active].id}`) }}>Reade More</button>
                        </div>
                        <div className="absolute overflow-hidden bottom-2 w-full h-[45vh] flex justify-start items-center " >
                            {data.map((item, index) => {
                                if (index < active + 2 && index > active - 2) {
                                    return (
                                        <div title={item.title} key={index} onClick={() => sliderHandeler(+index)} className={` transition-all mx-2 ${active === index ? " w-36 h-[100%] shadow-lg " : " w-24 h-[80%] cursor-pointer"}`}>
                                            <ImgLoader src={item.poster_path} style={'rounded-xl'} alt={item.title} />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>

                ) : (<h2 className="text-center text-red-500">Slidre Not fount</h2>)
            }
        </>
    )
}

export default HomeSlider