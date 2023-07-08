import ImgLoader from "@/components/imgLoader/ImgLoader";
import BtnBack from "@/components/btnBack/BtnBack";
import TitleDisc from "@/components/titleDisc/TitleDisc";
import AverageStars from "@/components/average/AverageStars";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/app/Loading";


const Movie = async ({ params }) => {
    const { tv } = params
    const getDat = async () => {
        let result = [];
        const res = await fetch(`https://api.themoviedb.org/3/tv/${tv}`, {
            next: { revalidate: 60 * 60 * 24 },
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
            }
        });
        if (res.status === 200) {
            result = await res.json()
            return result;
        }
        else {
            return false;
        }

    }
    const data = await getDat();


    return (
        <>
            {data ? (
                <Suspense fallback={<Loading />}>
                    <div className="grid grid-cols-12 gap-6 mb-4">
                        <div className=" col-start-2 col-span-10 sm:col-span-4
                         md:col-span-3 lg:col-span-4 ">
                            <ImgLoader
                                src={data.poster_path}
                                alt={data.title}
                                style={'rounded-xl max-h-[87vh]'} />
                        </div>
                        <div className="border text-[var(--c-lgray)]
                         bg-[var(--c-black)] rounded-xl p-4
                         col-start-2 col-span-10 sm:col-span-8
                          md:col-span-9 lg:col-span-8
                           overflow-hidden">
                            <TitleDisc title={'Overview'}
                                desc={data.overview || "No Description !"}
                                style={'text-justify'} />
                            <TitleDisc title={'Name'} desc={data.name} />
                            <div className="flex justify-start flex-wrap">
                                <TitleDisc
                                    title={'Language'}
                                    desc={data.original_language} />
                                <TitleDisc
                                    title={'First Air Date'}
                                    desc={data.first_air_date} />
                                <TitleDisc
                                    title={'Last Air Date'}
                                    desc={data.last_air_date} />
                                <TitleDisc
                                    title={'Episud Run Time'}
                                    desc={data.episode_run_time} />
                                <TitleDisc
                                    title={'HomePage'}>
                                    <a title={data.title}
                                        className="text-[var(--c-blue)] 
                                         hover:text-[var(--c-orange)]
                                         transition-all duration-500"
                                        href={data.homepage}
                                        target="_blank">
                                        Viewing
                                    </a>
                                </TitleDisc>
                                <TitleDisc title={'Status'}>
                                    <span className="bg-[var(--c-green)]
                                      text-xs font-semibold
                                    tracking-wider text-[var(--c-black)]
                                     p-1 rounded-md">
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
                                                    className="bg-[var(--c-orange)] inline-block
                                                      text-[var(--c-black)] tracking-widest
                                                      font-semibold text-xs mx-1
                                                      my-2 px-2 py-1 rounded-md">
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
            ) : (
                <div>
                    <p>Sory Not Found</p>
                    <Link href={'/'}
                        className="px-6 rounded-md my-3 py-1 bg-[var(--c-lblue)] 
                        hover:bg-[var(--c-blue)] transition-all"
                    >Go Home</Link>
                </div>
            )}
        </>
    )
}

export default Movie