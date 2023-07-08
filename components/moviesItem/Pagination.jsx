import Link from "next/link"

const Pagination = ({ activePage, totalPages, category }) => {
    let pages = [];
    for (let index = 2; index <= totalPages-1; index++) {
        pages.push(index)
    }

    return (
        <article className="flex flex-wrap items-center
         justify-center col-span-12 px-4 py-2">
            <Link
            key={'page_1'}
                className={
                    `${activePage === 1 ?
                        'bg-[var(--c-orange)] text-[var(--c-black)]' :
                        'bg-[var(--c-lblue)]'} 
                         py-1 px-2 text-lg
                 font-bold rounded-sm w-max mx-1`}
                href={`/categories/${category}/all/1`}>
                {1}
            </Link>
            <span className={`${activePage <= 4 ? 'hidden' : 'inline-block'} bg-[var(--c-lblue)] font-bold 
            rounded-sm w-max mx-1 text-center cursor-none
            py-1 px-2 text-lg`}>
                ...
            </span>
            {
                pages.map((item) => {
                    if (item === activePage || item <= activePage + 2 && item >= activePage -2) {
                        return (
                            <Link
                            key={'page_'+item}
                                className={
                                    `${activePage === item ?
                                        'bg-[var(--c-orange)] text-[var(--c-black)]' :
                                        'bg-[var(--c-lblue)]'} 
                                     py-1 px-2 text-lg
                             font-bold rounded-sm w-max mx-1`}
                                href={`/categories/${category}/all/${item}`}>
                                {item}
                            </Link>
                        )
                    }
                })
            }
            <span className={`${activePage >= totalPages-3 ? 'hidden' : 'inline-block'} bg-[var(--c-lblue)] font-bold 
            rounded-sm w-max mx-1 text-center cursor-none
            py-1 px-2 text-lg`}>
                ...
            </span>
            <Link
            key={'page_'+totalPages}
                className={`${activePage === totalPages ?
                    'bg-[var(--c-orange)] text-[var(--c-black)]' :
                    'bg-[var(--c-lblue)]'} 
                     py-1 px-2 text-lg
             font-bold rounded-sm w-max mx-1`}
                href={`/categories/${category}/all/${totalPages}`}>
                {totalPages}
            </Link>

        </article>
    )

}
export default Pagination