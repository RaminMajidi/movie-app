'use client'
import Image from "next/image"
import { useState } from "react"
const ImgLoader = ({ src, style, alt = '', width = 1000, height = 1000 }) => {
    const imageLoader = ({ src }) => {
        return `https://image.tmdb.org/t/p/original${src}`
    }
    const [imgLoading, setImgLoading] = useState(true)

    return (
        <div key={alt+"_img"} className={`w-full h-full relative ${style}`}>
            <span className={`${imgLoading ? "inline-block" : "hidden"} rounded-md  absolute w-full h-full transition-all duration-500 ease-in-out   bg-gradient-to-r from-[black] to-[gold] animate-pulse `}></span>
            <Image
            key={"img"+alt}
                className={`w-full h-full opacity-0 ${style} `}
                loader={imageLoader}
                onLoadingComplete={(image) => {
                    setImgLoading(false)
                    image.classList.remove("opacity-0")
                }}
                src={src}
                width={width}
                height={height}
                priority={true}
                alt={alt} />
        </div>
    )
}

export default ImgLoader