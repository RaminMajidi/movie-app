import MoviesItem from "@/components/moviesItem/MoviesItem"

const Movies = async () => {

    return (
        <section>
            <MoviesItem title={'Now Playing'} titleUrl={'now_playing'} />
        </section>
    )
}

export default Movies