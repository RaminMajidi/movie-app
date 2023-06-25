import MoviesItem from "@/components/moviesItem/MoviesItem"

const Movies = async () => {
    return (
        <section>
            <MoviesItem subUrl={'movie'} title={'Popular'} titleUrl={'popular'} />
        </section>
    )
}

export default Movies