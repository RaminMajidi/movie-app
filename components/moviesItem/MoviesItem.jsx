import { getData } from "@/service/HeaderQuery"
import MoviesSlider from "./MoviesSlider"


const MoviesItem = async ({ title, titleUrl }) => {
    const res = await getData(`https://api.themoviedb.org/3/movie/${titleUrl}?language=en-US&page=1`)
    const data = await res.results 
    
    return (
        <>
            {data ? (
                <>
                <article className=" border rounded-xl mb-10">
                    <MoviesSlider data={data} title={title}/>
                </article>
                </>

            ) : (null)}
        </>

    )
}

export default MoviesItem