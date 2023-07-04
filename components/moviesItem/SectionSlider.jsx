import Loading from "@/app/Loading"
import { Suspense } from "react"
const SectionSlider = ({key, title, children }) => {

    return (
        <Suspense fallback={<Loading/>}>
            <section id={key}>
                <h3 className="p-2 text-base md:text-lg uppercase tracking-widest">{title}</h3>
                <article className="rounded-xl mb-10">
                    {children}
                </article>
            </section>
        </Suspense>
    )
}

export default SectionSlider