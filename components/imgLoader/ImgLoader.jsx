'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
const ImgLoader = ({ src, style, alt = '', width = 500, height = 500 }) => {
    const [srcUrl, setSrcUrl] = useState(src)
    const imageLoader = ({ src }) => {
        return `https://image.tmdb.org/t/p/original${src}`
    }
    const [imgLoading, setImgLoading] = useState(true)

    useEffect(()=>{
        setSrcUrl(src)
    },[src])

    return (
        <div key={alt + "_img"} className={`w-full h-full relative transition-all  ${style}`}>
            <span className={`${imgLoading ? "inline-block" : "hidden"} 
              absolute w-full h-full transition-all duration-500 ease-in-out 
               bg-gradient-to-r from-[#494949] to-[#5eb1ff] animate-pulse ${style} `}>
            </span>
            <Image
                key={"img" + alt}
                quality={50}
                className={`w-full h-full opacity-0 ${style} `}
                loader={imageLoader}
                onError={()=>{}}
                onLoadingComplete={(image) => {
                    setImgLoading(false)
                    image.classList.remove("opacity-0")
                }}
                src={srcUrl}
                width={width}
                height={height}
                priority={true}
                alt={alt} />
        </div>
    )
}

export default ImgLoader