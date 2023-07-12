import AiringToday from "../categories/tv/AiringToday"
import TopRated from "../categories/tv/TopRated"

const HomeTvs = () => {

    return (
        <>
            <h3 className="text-center text-4xl p-2 mt-12">Tv&apos;s</h3>
            <hr className="w-[70%] mx-auto" />
            <section className="grid grid-cols-12 gap-4 px-3 py-4">
                <TopRated />
                <AiringToday />
            </section>
        </>

    )
}
export default HomeTvs