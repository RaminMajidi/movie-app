import MoviesItem from "@/components/moviesItem/MoviesItem"

const TvAiringToday = async () => {
    return (
        <section>
            <MoviesItem subUrl={'tv'} title={'Airing Today'} titleUrl={'airing_today'} />
        </section>
    )
}

export default TvAiringToday