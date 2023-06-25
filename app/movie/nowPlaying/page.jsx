import MoviesItem from "@/components/moviesItem/MoviesItem"

const Movies = async () => {

    return (
        <section>
            <MoviesItem subUrl={'movie'} title={'Now Playing'} titleUrl={'now_playing'} />
        </section>
    )
}

export default Movies