import { getData } from "@/service/HeaderQuery";
import ImgLoader from "@/components/imgLoader/ImgLoader";

const Movie = async ({ params }) => {
    const { movie } = params
    const data = await getData(`/3/movie/${movie}`);

    console.log(data)


    return (
        <div className="grid grid-cols-12 gap-6 mb-4">
            <div className=" col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-4 ">
                <ImgLoader src={data.poster_path} alt={data.title} style={'rounded-xl max-h-[80vh]'} />
            </div>
            <div className="border rounded-xl p-4 col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-8 max-h-[80vh] overflow-hidden">
                <h2 className="my-3 text-sm  md:text-lg">Title : {data.title}</h2>
                <h2 className="my-3 text-sm  md:text-lg">Tagline : {data.tagline}</h2>
                <h2 className="my-3 text-sm  md:text-lg">Language : {data.original_language}</h2>
                <h2 className="my-3 text-sm  md:text-lg">Budget : {data.budget} $</h2>
                <h2 className="my-3 text-sm  md:text-lg">Revenue : {data.revenue} $</h2>
                <h2 className="my-3 text-sm  md:text-lg">Release Date : {data.release_date}</h2>
                <h2 className="my-3 text-sm  md:text-lg">Runtime : {data.runtime}</h2>
                <h2 className="my-3 text-sm  md:text-lg">HomePage : <a title={data.title} className="text-blue-400  hover:text-blue-700 transition-all duration-500" href={data.homepage} target="_blank">Viewing</a></h2>
                <h2 className="my-3 text-sm  md:text-lg">Average : {Math.round(data.vote_average)}/10</h2>
                <h2 className="my-3 text-sm  md:text-lg">Status : <span className="bg-green-500 text-xs text-black font-semibold p-1 rounded-md">{data.status}</span></h2>
                <h2 className="my-3 text-sm  md:text-lg">Genres : 
                    {
                        data.genres.map((item, i) => {
                            if (i < 4) {
                                return (
                                    <span key={"genre_" + i} className="bg-blue-500 font-semibold text-xs mx-1 my-4  px-2 py-1 rounded-md">{item.name}</span>
                                )
                            }
                        })
                    }
                </h2>
            </div>
            <div className=" p-4  md:p-1 col-span-12">
                <h3 className="text-blue-500 font-bold my-2">overview : </h3>
                <p className=" text-justify">{data.overview}</p>
            </div>
        </div>
    )
}

export default Movie