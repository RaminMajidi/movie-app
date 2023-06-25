import MoviesItem from "@/components/moviesItem/MoviesItem"

const Movies = async () => {

    return (
        <section>
            <MoviesItem subUrl={'movie'} title={'Top Rated'} titleUrl={'top_rated'} />
        </section>
    )
}

export default Movies