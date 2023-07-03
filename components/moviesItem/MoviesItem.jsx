import { Suspense } from "react";
import MoviesSlider from "./MoviesSlider"
import Loading from "@/app/Loading";

const MoviesItem = async ({ title, subUrl, titleUrl, }) => {

    const getData = async () => {
        let result;
        const res = await fetch(`https://api.themoviedb.org/3/${subUrl}/${titleUrl}?language=en-US&page=1`, {
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
        <>
            <Suspense fallback={<Loading/>}>
                <h3 className="p-2 text-lg uppercase tracking-widest">{subUrl + " / " + title}</h3>
                <article className=" border rounded-xl mb-10">
                    <MoviesSlider data={data?.results} subUrl={subUrl} />
                </article>
            </Suspense>
        </>

    )
}

export default MoviesItem