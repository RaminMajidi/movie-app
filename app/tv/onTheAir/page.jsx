import MoviesItem from "@/components/moviesItem/MoviesItem"

const TvOnTheAir = async () => {
    return (
        <section>
            <MoviesItem subUrl={'tv'} title={'On The Air'} titleUrl={'on_the_air'} />
        </section>
    )
}

export default TvOnTheAir