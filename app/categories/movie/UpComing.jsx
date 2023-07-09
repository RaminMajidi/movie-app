import SectionSlider from "@/components/moviesItem/SectionSlider";
import MoviesSlider from "@/components/moviesItem/MoviesSlider";


const UpComing = async () => {

    const getData = async () => {
        let result;
        const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, {
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
        <SectionSlider
            category={'movie'}
            key={'upcoming'}
            title={'Move / Upcoming'}>
            <MoviesSlider data={data} subUrl={'movie'} />
        </SectionSlider>
    )
}

export default UpComing