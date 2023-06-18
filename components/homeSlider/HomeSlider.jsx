'use client'
import { useState } from "react"
import ImgLoader from "../imgLoader/ImgLoader"
import { useRouter } from "next/navigation"


const HomeSlider = (props) => {
    const router = useRouter();
    const [data, setData] = useState(props.data.results)
    const [active, setActive] = useState(1)
    
    return (
        <div className="relative w-full h-[88vh]">
            <ImgLoader src={data[active].backdrop_path} style={"rounded-xl"} alt="Bg-slider" />
            <div className="absolute top-2 left-2">
            <h3 className="bg-gray-600 mt-2 px-3 py-2 w-[260px] md:w-max truncate rounded-lg text-xs md:text-base">Title : <span>{data[active].title}</span></h3>
            <h3 className="bg-gray-600 mt-2 px-3 py-2 w-max rounded-lg text-xs md:text-base">Score : <span>{data[active].vote_average}</span></h3>
            <button className="bg-blue-500 mt-2 px-3 py-2 w-max rounded-lg text-xs md:text-base" onClick={()=>{router.push(`/movies/${data[active].id}`)}}>Reade More</button>
            </div>
            <div className="absolute overflow-hidden bottom-2 w-full h-[45vh] flex justify-start items-center " >
                {data.map((item, index) => {
                    if (index < active + 2 && index > active -2) {
                        return (
                            <div key={index} onClick={()=>setActive(index)} className={`transition-all mx-2 ${active === index ? " w-36 h-[100%] shadow-lg " : " w-24 h-[80%] "}`}>
                                <ImgLoader src={item.poster_path} style={'rounded-xl'} alt={item.title}/>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default HomeSlider