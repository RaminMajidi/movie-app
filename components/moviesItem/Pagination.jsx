import Link from "next/link"

const Pagination = ({ activePage, totalPages, category }) => {
    let pages = [];
    for (let index = 2; index <= totalPages - 1; index++) {
        pages.push(index)
    }

    return (
        <article className="flex flex-wrap items-center
         justify-center col-span-12 px-4 py-2 ">
            <Link
                key={'page_1'}
                className={
                    `${activePage === 1 ?
                        'bg-[var(--c-orange)] text-[var(--c-black)]' :
                        'bg-[var(--c-lblue)]'} 
                         p-1 text-lg text-center
                 font-bold rounded-sm w-[35px] m-1`}
                href={`/all/${category}/1`}>
                {1}
            </Link>
            <span className={`${activePage <= 4 ? 'hidden' : 'inline-block'}
             bg-[var(--c-lblue)] font-bold 
            rounded-sm w-[25px] m-1 text-center cursor-none
            p-1 text-lg`}>
                ...
            </span>
            {
                pages.map((item) => {
                    if (item === activePage || item <= activePage + 2 && item >= activePage - 2) {
                        return (
                            <Link
                                key={'page_' + item}
                                className={
                                    `${activePage === item ?
                                        'bg-[var(--c-orange)] text-[var(--c-black)]' :
                                        'bg-[var(--c-lblue)]'} 
                                        p-1 text-lg text-center
                             font-bold rounded-sm w-[35px] m-1`}
                                href={`/all/${category}/${item}`}>
                                {item}
                            </Link>
                        )
                    }
                })
            }
            <span className={`${activePage >= totalPages - 3 ? 'hidden' : 'inline-block'}
             bg-[var(--c-lblue)] font-bold 
            rounded-sm w-max m-1 text-center cursor-none
            p-1 text-lg `}>
                ...
            </span>
            <Link
                key={'page_' + totalPages}
                className={`${activePage === totalPages ?
                    'bg-[var(--c-orange)] text-[var(--c-black)]' :
                    'bg-[var(--c-lblue)]'} 
                     p-1 text-lg text-center
             font-bold rounded-sm w-[35px] m-1`}
                href={`/all/${category}/${totalPages}`}>
                {totalPages}
            </Link>

        </article>
    )

}
export default Pagination