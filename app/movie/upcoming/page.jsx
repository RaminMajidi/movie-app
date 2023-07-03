import Loading from "@/app/Loading";
import MoviesSlider from "@/components/moviesItem/MoviesSlider";
import { Suspense } from "react";

const Movies = async () => {

    const getData = async () => {
        let result;
        const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, {
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
    const data = await getData();

    return (
        <Suspense fallback={<Loading />}>
            <section>
                <h3 className="p-2 text-lg uppercase tracking-widest">Move / Upcoming</h3>
                <article className="rounded-xl mb-10">
                    <MoviesSlider data={data} subUrl={'movie'} />
                </article>
            </section>
        </Suspense>
    )
}

export default Movies