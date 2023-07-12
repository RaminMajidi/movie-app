import TopRated from "../categories/movie/TopRated"
import UpComing from "../categories/movie/UpComing"

const HomeMovies = () => {

    return (
        <>
            <h3 className="text-center text-4xl p-2 mt-12">Movies</h3>
            <hr className="w-[70%] mx-auto" />
            <section className="grid grid-cols-12 gap-4 px-3 py-4  ">
                <TopRated />
                <UpComing />
            </section>
        </>
    )
}
export default HomeMovies