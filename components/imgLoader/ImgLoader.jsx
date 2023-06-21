'use client'
import Image from "next/image"
import { useState } from "react"
const ImgLoader = ({ src, style, alt = '', width = 500, height = 500 }) => {
    const imageLoader = ({ src }) => {
        return `https://image.tmdb.org/t/p/original${src}`
    }
    const [imgLoading, setImgLoading] = useState(true)

    return (
        <div key={alt + "_img"} className={`w-full h-full relative transition-all  ${style}`}>
            <span className={`${imgLoading ? "inline-block" : "hidden"} 
             rounded-md  absolute w-full h-full transition-all duration-500 ease-in-out 
               bg-gradient-to-r from-[#494949] to-[#5eb1ff] animate-pulse `}>
            </span>
            <Image
                key={"img" + alt}
                quality={50}
                className={`w-full h-full opacity-0 ${style} `}
                loader={imageLoader}
                placeholder="blur"
                blurDataURL={'/img/loading.png'}
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