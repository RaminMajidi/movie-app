import MoviesItem from "@/components/moviesItem/MoviesItem"

const TvAiringToday = async () => {
    return (
        <section>
            <MoviesItem subUrl={'tv'} title={'Top Rated'} titleUrl={'top_rated'} />
        </section>
    )
}

export default TvAiringToday