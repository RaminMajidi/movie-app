import UpComing from "./UpComing";
import TopRated from "./TopRated";

export const metadata = {
    title: 'Movie-App | Movie',
}

const MoviePage = async () => {

    return (
        <section className="grid grid-cols-12 gap-4 px-3 py-4">
            <UpComing />
            <TopRated />
        </section>
    )
}
export default MoviePage