import MoviesSlider from "@/components/moviesItem/MoviesSlider";
import SectionSlider from "@/components/moviesItem/SectionSlider";

const TopRated = async () => {

    const getData = async () => {
        let result;
        const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, {
            next: { revalidate: 60 * 60 * 24 },
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
            }
        });
        if (res.status === 200) {
            result = await res.json()
            return result;
        }
        else {
            return false;
        }

    }
    const data = await getData();

    return (
        <SectionSlider key={'top_rated'} category={'tv'} title={'Tv / Top Rated'}>
            <MoviesSlider data={data} subUrl={'tv'} />
        </SectionSlider>
    )
}

export default TopRated