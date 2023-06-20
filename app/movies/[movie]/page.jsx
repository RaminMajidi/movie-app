import { getData } from "@/service/HeaderQuery";
import ImgLoader from "@/components/imgLoader/ImgLoader";

const Movie = async ({ params }) => {
    const { movie } = params
    const data = await getData(`/3/movie/${movie}`);
    return (
        <div className="grid grid-cols-12 gap-6 mb-4">
            <div className=" col-start-2 col-span-10  sm:col-span-4 md:col-span-3 lg:col-span-4 ">
                <ImgLoader src={data.poster_path} alt={data.title} style={'rounded-xl max-h-[87vh]'} />
            </div>
            <div className="border text-[var(--c-lgray)] bg-[var(--c-black)] rounded-xl p-4 col-start-2 col-span-10 sm:col-span-8 md:col-span-9 lg:col-span-8  overflow-hidden">
                <h2 className=" text-justify "><span className="text-[var(--c-lblue)]">Overview : </span>{data.overview}</h2>
                <h2 className="my-3 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">Title :</span> {data.title}</h2>
                <h2 className="my-3 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">Tagline : </span>{data.tagline}</h2>
                <div className="flex justify-start flex-wrap">
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">Language : </span>{data.original_language}</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">Budget : </span>{data.budget} $</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">Revenue : </span>{data.revenue} $</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">Release Date : </span>{data.release_date}</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">Runtime : </span>{data.runtime}</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">Average : </span>{Math.round(data.vote_average)}/10</h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">HomePage : </span><a title={data.title} className="text-[var(--c-blue)]  hover:text-[var(--c-orange)] transition-all duration-500" href={data.homepage} target="_blank">Viewing</a></h2>
                    <h2 className="my-3 mr-4 text-sm  md:text-lg"><span className="text-[var(--c-lblue)]">Status : </span><span className="bg-[var(--c-green)] text-xs font-semibold tracking-wider text-[var(--c-black)] p-1 rounded-md">{data.status}</span></h2>
                </div>
                <h2 className="my-1 text-sm  md:text-lg flex flex-wrap justify-start items-center"><span className="text-[var(--c-lblue)]">Genres : </span>
                    {
                        data.genres.map((item, i) => {
                            if (i < 3) {
                                return (
                                    <span key={"genre_" + i} className="bg-[var(--c-orange)] text-[var(--c-black)]  tracking-widest font-semibold text-xs mx-1 my-4  px-2 py-1 rounded-md">{item.name}</span>
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