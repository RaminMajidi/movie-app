import { getData } from "@/service/HeaderQuery";
import ImgLoader from "@/components/imgLoader/ImgLoader";

const Movie = async ({ params }) => {
    const { movie } = params
    const data = await getData(`/3/movie/${movie}`);
    return (
        <div className="grid grid-cols-12 gap-6 mb-4 text-slate-200">
            <div className=" col-start-2 col-span-10  sm:col-span-4 md:col-span-3 lg:col-span-4 ">
                <ImgLoader src={data.poster_path} alt={data.title} style={'rounded-xl max-h-[87vh]'} />
            </div>
            <div className="border bg-[var(--c-black)] rounded-xl p-4 col-start-2 col-span-10 sm:col-span-8 md:col-span-9 lg:col-span-8  overflow-hidden">
                <h3 className="text-[var(--c-orange)] font-bold my-2"> </h3>
                <p className=" text-justify"><span className="text-[var(--c-orange)]">Overview : </span>{data.overview}</p>
                <h2 className="my-3 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">Title :</span> {data.title}</h2>
                <h2 className="my-3 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">Tagline : </span>{data.tagline}</h2>
                <div className="flex justify-start flex-wrap">
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">Language : </span>{data.original_language}</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">Budget : </span>{data.budget} $</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">Revenue : </span>{data.revenue} $</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">Release Date : </span>{data.release_date}</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">Runtime : </span>{data.runtime}</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">Average : </span>{Math.round(data.vote_average)}/10</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">HomePage : </span><a title={data.title} className="text-blue-400  hover:text-blue-700 transition-all duration-500" href={data.homepage} target="_blank">Viewing</a></h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-orange)]">Status : </span><span className="bg-[var(--c-primary)] text-xs font-semibold p-1 rounded-md">{data.status}</span></h2>
                </div>
                <h2 className="my-1 text-sm  md:text-lg flex flex-wrap justify-start items-center"><span className="text-[var(--c-orange)]">Genres : </span>
                    {
                        data.genres.map((item, i) => {
                            if (i < 3) {
                                return (
                                    <span key={"genre_" + i} className="bg-[var(--c-orange)] text-[var(--c-black)] font-semibold text-xs mx-1 my-4  px-2 py-1 rounded-md">{item.name}</span>
                                )
                            }
                        })
                    }
                </h2>
            </div>
        </div>
    )
}

export default Movie