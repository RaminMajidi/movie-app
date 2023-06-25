import MoviesItem from "@/components/moviesItem/MoviesItem"

const Movies = async () => {

    return (
        <section>
        <MoviesItem subUrl={'movie'} title={'Upcoming'} titleUrl={'upcoming'} />
        </section>
    )
}

export default Movies