import MoviesItem from "@/components/moviesItem/MoviesItem"

const Movies = async () => {
    return (
        <section>
            <MoviesItem title={'Popular'} titleUrl={'popular'} />
        </section>
    )
}

export default Movies