import CircleLoading from "../loading/CircleLoading"
import { Suspense } from "react"
const SectionSlider = ({ key, title, children }) => {

    return (
        <section id={key} className="col-span-12 md:col-span-6">
            <Suspense fallback={<CircleLoading />}>
                <div className="flex justify-between items-center px-5">
                    <h3 className="p-2 text-base md:text-lg 
                     uppercase tracking-widest">
                        {title}
                    </h3>
                    <button className="bg-[var(--c-lblue)] px-3 py-0
                    rounded-md font-bold tracking-wider">
                        See All
                    </button>
                </div>
                <article className="rounded-xl mb-10">
                    {children}
                </article>
            </Suspense>
        </section>
    )
}

export default SectionSlider