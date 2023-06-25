import { getData } from "@/service/HeaderQuery"
import MoviesSlider from "./MoviesSlider"


const MoviesItem = async ({ title,subUrl, titleUrl, }) => {
    const res = await getData(`https://api.themoviedb.org/3/${subUrl}/${titleUrl}?language=en-US&page=1`)
    const data = await res.results 
    
    return (
        <>
            {data ? (
                <>
                <h3 className="p-2 text-xl font-semibold">{title}</h3>
                <article className=" border rounded-xl mb-10">
                    <MoviesSlider data={data} subUrl={subUrl}/>
                </article>
                </>
            ) : (null)}
        </>

    )
}

export default MoviesItem