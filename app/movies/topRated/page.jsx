import MoviesItem from "@/components/moviesItem/MoviesItem"

const Movies = async () => {

    return (
        <section>
            <MoviesItem title={'Top Rated'} titleUrl={'top_rated'} />
        </section>
    )
}

export default Movies