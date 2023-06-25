import MoviesItem from "@/components/moviesItem/MoviesItem"

const TvPopular = async () => {
    return (
        <section>
            <MoviesItem subUrl={'tv'} title={'Popular'} titleUrl={'popular'} />
        </section>
    )
}

export default TvPopular