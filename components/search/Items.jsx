'use client'

import { useEffect, useState } from "react"
import Item from "./Item"

const Items = ({ data }) => {

    const [items, setItems] = useState(data?.results)

    useEffect(() => {
        console.log(data)
        setItems(data?.results)
    }, [data])


    return (
        <article className="py-4 px-2 mt-8">
            {
                items ? (
                    <div className="grid grid-cols-12 gap-4">
                        {items.map((item) => {
                            if (item.poster_path) {
                                return (
                                    <Item
                                        key={item.id}
                                        title={item?.title || item?.name}
                                        imgUrl={item.poster_path}
                                        desc={item.overview}
                                        category={item?.media_type}
                                    />
                                )
                            }
                        })}

                    </div>
                ) :
                    (
                        <h3 className="text-center p-8 text-red-500 text-2xl">
                            Items Not Found
                        </h3>
                    )
            }
        </article>
    )
}

export default Items