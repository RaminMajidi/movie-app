'use client'

import { useEffect, useState } from "react"
import Item from "./Item"
import NotItem from "./NotItem"

const Items = ({ data }) => {

    const [items, setItems] = useState(data?.results)
    const [copyItems, setCopyItems] = useState(data?.results)
    const [filter, setFilter] = useState('all')

    function filterHandler(category) {
        setFilter(category)
        if (category === 'all') {
            setCopyItems(items)
        } else {
            let newList = items.filter(item => item.media_type === category)
            setCopyItems(newList)
        }

    }

    useEffect(() => {
        setItems(data?.results)
        setCopyItems(data?.results)
    }, [data])


    return (
        <article className="pt-1 pb-6 px-2 ">

            {items.length ?
                (
                    <div className="text-center mb-4 py-3">
                        <h3 className="p-4 text-2xl">Filter By</h3>
                        <button
                            onClick={() => filterHandler('all')}
                            className={`mx-4 px-4 rounded-lg font-bold text-lg
                  ${filter === "all" ? "bg-[var(--c-green)] text-[var(--c-white)]" :
                                    "bg-[var(--c-orange)] text-[var(--c-black)]"}`}>
                            All
                        </button>
                        <button
                            onClick={() => filterHandler('movie')}
                            className={`mx-4 px-4 rounded-lg font-bold text-lg
                 ${filter === "movie" ? "bg-[var(--c-green)] text-[var(--c-white)]" :
                                    "bg-[var(--c-orange)] text-[var(--c-black)]"}`}>
                            Movie
                        </button>
                        <button
                            onClick={() => filterHandler('tv')}
                            className={`mx-4 px-4 rounded-lg font-bold text-lg
                 ${filter === "tv" ? "bg-[var(--c-green)] text-[var(--c-white)]" :
                                    "bg-[var(--c-orange)] text-[var(--c-black)]"}`}>
                            Tv
                        </button>

                    </div>
                )
                :
                (null)
            }
            {
                copyItems.length ? (
                    <>
                        <div className="grid grid-cols-12 gap-4">
                            {copyItems.map((item) => {
                                if (item.poster_path) {
                                    return (
                                        <Item
                                            key={item.id}
                                            itemId={item.id}
                                            title={item?.title || item?.name}
                                            imgUrl={item.poster_path}
                                            desc={item.overview}
                                            category={item?.media_type}
                                        />
                                    )
                                }
                            })}

                        </div>
                    </>
                ) :
                    (
                        <NotItem />
                    )
            }
        </article>
    )
}

export default Items