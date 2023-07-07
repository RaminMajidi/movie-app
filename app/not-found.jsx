import Link from 'next/link'

export default function NotFound() {
    return (
        <section className='text-center bg-[var(--c-black)] w-full h-[85vh]
        flex justify-center items-center'>
            <article className='font-bold bg-[var(--c-orange)]
             w-full py-12 text-[var(--c-black)]'>
            <h1 className=' text-2xl md:text-5xl
            '>Not found – 404!</h1>
            <div className='relative border-[var(--c-black)] border-4
            max-w-fit mx-auto top-16 bg-[var(--c-orange)]
             px-4 py-1 hover:bg-[var(--c-black)] hover:text-[var(--c-orange)]
             transition-all duration-500'>
                <Link href="/">Go back to Home</Link>
            </div>
            </article>
        </section>
    )
}