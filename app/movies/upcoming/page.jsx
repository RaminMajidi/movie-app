import MoviesItem from "@/components/moviesItem/MoviesItem"

const Movies = async () => {

    return (
        <section>
        <MoviesItem title={'Upcoming'} titleUrl={'upcoming'} />
        </section>
    )
}

export default Movies