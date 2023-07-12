'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"

const Header = () => {
    const path = usePathname()
    const [active, setActive] = useState('')

    useEffect(() => {
        setActive('')
        if(path === "/"){
            setActive("home")
        }else
        if(path === "/search"){
            setActive("search")
        }else
        if(path.includes('movie')){
            setActive('movie')
        }else
        if(path.includes('tv')){
            setActive('tv')
        }else{
            setActive('')
        }
   
    }, [path])


    return (
        <header className="max-w-[1400px] bg-[var(--c-bg)] text-[var(--c-gray)]
         border-b-2 font-bold  fixed w-full h-[3rem] top-0
          z-50 px-2 py-4 flex justify-center 
          sm:justify-between sm:px-4 items-center">
            <div>
                <h2 className="hidden sm:block">Movie App</h2>
            </div>

            <div className="flex">

                <div>
                    <Link href={'/'}
                        className={`mx-2 hover:text-[var(--c-orange)]
                      transition-all duration-700 
                      ${active === "home" ? 'text-[var(--c-orange)]' : ''}`}>
                        <span >Home</span>
                    </Link>
                </div>

                <div className="relative group">
                    <Link href={'/all/movie/1'}
                        className={`mx-2 hover:text-[var(--c-orange)]
                        transition-all duration-700
                        ${active === "movie" ? 'text-[var(--c-orange)]' : ''}`}>
                        <span>Movies</span>
                    </Link>
                </div>

                <div className="relative group">
                    <Link href={'/all/tv/1'}
                        className={`mx-2 hover:text-[var(--c-orange)]
                        transition-all duration-700
                        ${active === "tv" ? 'text-[var(--c-orange)]' : ''}`}>
                        <span>Tv&apos;s</span>
                    </Link>
                </div>

                <div>
                    <Link href={'/search'}
                        className={`mx-2 hover:text-[var(--c-orange)]
                      transition-all duration-700
                      ${active === "search" ? 'text-[var(--c-orange)]' : ''}`}>
                        <span >Search</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header