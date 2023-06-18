import { getData } from "@/service/HeaderQuery";
import ImgLoader from "@/components/imgLoader/ImgLoader";

const Movie = async ({ params }) => {
    const { movie } = params
    const data = await getData(`/3/movie/${movie}`);
    return (
        <div className="grid grid-cols-12 gap-6 mb-4">
            <div className=" col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-4 max-h-[86vh]">
                <ImgLoader src={data.poster_path} alt={data.title} style={'rounded-xl'} />
            </div>
            <div className="border rounded-md  p- pl-4 col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-8 max-h-[86vh]">
                <h2 className="my-4 text-sm  md:text-lg  max-w-[250px] truncate"><span>Title : </span>{data.title}</h2>
                <h2 className="my-4 text-sm  md:text-lg  max-w-[280px] truncate"><span>Tagline : </span><span className="truncate">{data.tagline}</span></h2>
                <h2 className="my-4 text-sm  md:text-lg"><span>Language : </span><span>{data.original_language}</span></h2>
                <h2 className="my-4 text-sm  md:text-lg"><span>Budget : </span><span>{data.budget}</span><span>$</span></h2>
                <h2 className="my-4 text-sm  md:text-lg"><span>Revenue : </span><span>{data.revenue}</span><span>$</span></h2>
                <h2 className="my-4 text-sm  md:text-lg"><span>Release Date : </span><span>{data.release_date}</span></h2>
                <h2 className="my-4 text-sm  md:text-lg"><span>Runtime : </span><span>{data.runtime}</span></h2>
                <h2 className="my-4 text-sm  md:text-lg"><span>HomePage : </span><a title={data.title} className="text-blue-400 hover:text-blue-700 transition-all duration-500" href={data.homepage} target="_blank">Viewing</a></h2>
                <h2 className="my-4 text-sm  md:text-lg"><span>Average : </span><span>{Math.round(data.vote_average)}/10</span></h2>
                <h2 className="my-4 text-sm  md:text-lg"><span>Status : </span><span className="bg-green-500 py-1 px-2 rounded-md">{data.status}</span></h2>
                <h2 className="my-4 text-sm  md:text-lg"><span>Genres : </span>
                    {
                        data.genres.map((item, i) => (
                            <>
                                <span key={"genre_" + i} className="bg-blue-500 font-semibold text-xs mx-1 my-4  px-2 py-1 rounded-md"> {item.name} </span>
                            </>
                        ))
                    }
                </h2>
            </div>
        </div>
    )
}

export default Movie