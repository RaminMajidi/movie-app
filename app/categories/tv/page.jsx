import AiringToday from "./AiringToday";
import TopRated from "./TopRated";


const TvPage = async () =>{

    return(
        <section className="grid grid-cols-12 gap-4 px-3 py-4">
            <AiringToday/>
            <TopRated/>
        </section>
    )
}

export default TvPage