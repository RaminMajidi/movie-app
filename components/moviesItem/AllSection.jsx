'use client'
import { Suspense, useEffect, useState } from "react"
import Item from "../search/Item"
import CircleLoading from "../loading/CircleLoading"
import Pagination from "./Pagination"

const AllSection = ({ data, category }) => {
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [results, setResults] = useState([])
    useEffect(() => {
        setPage(+data?.page)
        setTotalPages(+data?.total_pages > 200 ? 200 : +data?.total_pages)
        setResults(data?.results)
    }, [data])
    return (
        <section className="grid grid-cols-12 gap-4 min-h-[80vh] px-2 py-4">
            <Suspense fallback={<CircleLoading />}>
                {results.length > 0 ?
                    (
                        <>
                            {
                                results.map((item) => {
                                    if (item.poster_path) {
                                        return (
                                            <Item
                                                key={item.id}
                                                itemId={item.id}
                                                title={item?.title || item?.name}
                                                imgUrl={item.poster_path}
                                                desc={item.overview}
                                                category={category}
                                            />
                                        )
                                    }
                                })
                            }
                            < Pagination 
                            activePage={page}
                            category={category} 
                            totalPages={totalPages} />
                        </>
                    )
                    :
                    (
                        null
                    )
                }
            </Suspense>
        </section>
    )
}
export default AllSection