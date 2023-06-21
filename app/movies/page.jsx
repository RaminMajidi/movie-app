import MoviesItem from "@/components/moviesItem/MoviesItem"

const Movies = async () => {


    return (
        <section>
        <MoviesItem title={'Upcoming'} titleUrl={'upcoming'}/>
        {/* <MoviesItem title={'Now Playing'} titleUrl={'now_playing'}/>
        <MoviesItem title={'Top Rated'} titleUrl={'top_rated'}/>
        <MoviesItem title={'Popular'} titleUrl={'popular'}/> */}
        </section>
    )
}

export default Movies