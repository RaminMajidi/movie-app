'use client'
import { useState } from "react"
import ImgLoader from "../imgLoader/ImgLoader"
import { useRouter } from "next/navigation"


const HomeSlider =  (props) => {
    const router = useRouter();
    const [data, setData] =  useState(props.data?.results)
    const [active, setActive] = useState(0)

    const sliderHandeler = (i) => {
        setActive(i)
    }

    return (
        <>
            {
                data ? (
                    <div className="relative w-full h-[88vh] mb-3 ">
                        <ImgLoader
                            src={data[active].backdrop_path}
                            style={`rounded-xl transition-all`}
                            alt="Bg-slider" />
                        <div className="absolute w-[98%] top-2 left-2 text-[var(--c-black)]">
                            <h3 className="bg-[var(--c-gray)] mt-2 px-3 py-2
                               truncate rounded-lg text-xs w-fit max-w-[93%] 
                              font-semibold md:min-w-[125px] md:text-base">
                                Title :
                                <span>
                                    {data[active].title}
                                </span>
                            </h3>
                            <h3 className="bg-[var(--c-gray)] mt-2 px-3 py-2 w-max 
                             rounded-lg text-xs font-semibold md:min-w-[125px] md:text-base">
                                Score :
                                <span>
                                    {data[active].vote_average}
                                </span>
                            </h3>
                            <button className="bg-[var(--c-orange)]
                             mt-2 p-2 w-max rounded-lg text-xs
                             font-semibold md:min-w-[125px] md:text-base"
                                onClick={() => {
                                    router.push(`/movies/${data[active].id}`)
                                }}>
                                Reade More
                            </button>
                        </div>
                        <div className="absolute overflow-hidden bottom-2 w-full 
                         h-[45vh] flex justify-start items-center " >
                            {data.map((item, index) => {
                                return (
                                    <div title={item.title}
                                        key={index}
                                        onClick={() => sliderHandeler(+index)}
                                        className={` transition-all mx-2
                                          ${active === index ? " w-40 h-[100%] shadow-lg " :
                                                " w-32 h-[80%] cursor-pointer"}
                                            ${index > (active + 1) ? 'hidden' :
                                                index < (active - 1) ? 'hidden' :
                                                    'inline-block'} `
                                        }>
                                        <ImgLoader src={item.poster_path}
                                            style={'rounded-xl'}
                                            alt={item.title}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                ) : (<h2 className="text-center text-red-500">Slidre Not fount</h2>)
            }
        </>
    )
}

export default HomeSlider