import ImgLoader from "@/components/imgLoader/ImgLoader";
import BtnBack from "@/components/btnBack/BtnBack";
import TitleDisc from "@/components/titleDisc/TitleDisc";
import AverageStars from "@/components/average/AverageStars";
import { Suspense } from "react";
import Loading from "@/app/Loading";
import NotFound from "@/app/not-found";


const Movie = async ({ params }) => {
    const { movie } = params
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}`, {
        next: { revalidate: 60 * 60 * 24 },
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
        }
    });
    if (res.status != 200) {
        return NotFound();
    }
    const data = await res.json();
    return (
        <>
            <Suspense fallback={<Loading />}>
                <div className="grid grid-cols-12 gap-6 mb-4">
                    <div className=" col-start-2 col-span-10 sm:col-span-4 md:col-span-3 lg:col-span-4 ">
                        <ImgLoader
                            src={data.poster_path}
                            alt={data.title}
                            style={'rounded-xl max-h-[87vh]'} />
                    </div>
                    <div className="border text-[var(--c-lgray)] bg-[var(--c-black)] rounded-xl p-4
                 col-start-2 col-span-10 sm:col-span-8 md:col-span-9 lg:col-span-8
                 overflow-hidden">
                        <TitleDisc title={'Overview'} desc={data.overview || "No Description !"} style={'text-justify'} />
                        <TitleDisc title={'Title'} desc={data.title} />
                        <TitleDisc title={'Tagline'} desc={data.tagline} />
                        <div className="flex justify-start flex-wrap">
                            <TitleDisc title={'Language'} desc={data.original_language} />
                            <TitleDisc title={'Budget'}
                                desc={new Intl.NumberFormat().format(data.budget) + '$'} />
                            <TitleDisc title={'Revenue'}
                                desc={new Intl.NumberFormat().format(data.revenue) + '$'} />
                            <TitleDisc title={'Release Date'} desc={data.release_date} />
                            <TitleDisc title={'Runtime'} desc={data.runtime} />
                            <TitleDisc title={'HomePage'}>
                                <a title={data.title}
                                    className="text-[var(--c-blue)]  hover:text-[var(--c-orange)]
                          transition-all duration-500"
                                    href={data.homepage}
                                    target="_blank">
                                    Viewing
                                </a>
                            </TitleDisc>
                            <TitleDisc title={'Status'}>
                                <span className="bg-[var(--c-green)]  text-xs font-semibold
                             tracking-wider text-[var(--c-black)] p-1 rounded-md">
                                    {data.status}
                                </span>
                            </TitleDisc>
                        </div>
                        <TitleDisc title={'Average'} style="flex">
                            <AverageStars
                                average={data.vote_average} />
                        </TitleDisc>
                        <TitleDisc title={'Genres'}>
                            {
                                data.genres.map((item, i) => {
                                    if (i < 3) {
                                        return (
                                            <span key={"genre_" + i}
                                                className="bg-[var(--c-orange)] inline-block  text-[var(--c-black)] 
                                              tracking-widest font-semibold text-xs mx-1 my-2  px-2
                                               py-1 rounded-md">
                                                {item.name}
                                            </span>
                                        )
                                    }
                                })
                            }
                        </TitleDisc>
                        <BtnBack
                            style={
                                `px-6 rounded-md my-3 py-1 bg-[var(--c-lblue)] 
                         hover:bg-[var(--c-blue)] transition-all`}
                        />
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default Movie