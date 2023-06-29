import MoviesSlider from "./MoviesSlider"


const MoviesItem = async ({ title,subUrl, titleUrl, }) => {

    const getData = async () => {
        let result ;
        const res = await fetch(`https://api.themoviedb.org/3/${subUrl}/${titleUrl}?language=en-US&page=1`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
            }
        });
        if (res.status === 200) {
            console.log(res)
            result = await res.json()
            return result;
        }
        else {
            return false;
        }

    }
    const data = await getData();
    
    return (
        <>
            {data ? (
                <>
                <h3 className="p-2 text-lg uppercase tracking-widest">{subUrl+" / "+title}</h3>
                <article className=" border rounded-xl mb-10">
                    <MoviesSlider data={data} subUrl={subUrl}/>
                </article>
                </>
            ) : (null)}
        </>

    )
}

export default MoviesItem