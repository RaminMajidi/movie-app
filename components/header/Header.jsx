import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-[var(--c-bg)] text-[var(--c-gray)]
         border-b-2 font-bold  fixed w-full h-[3rem] top-0 left-0
          z-50 px-2 py-4 flex justify-between items-center">
            <div>
                <h2 className="hidden sm:block">Movie App</h2>
            </div>

            <div className="flex">

                <div>
                    <Link href={'/'}
                        className="mx-2 hover:text-[var(--c-orange)]
                      transition-all duration-700">
                        <span >Home</span>
                    </Link>
                </div>

                <div className="relative group">
                    <button type="button"
                        className="group mx-2 hover:text-[var(--c-orange)] 
                      transition-all duration-700">
                        <span>Movies</span>
                    </button>
                    <ul className="group rounded-lg absolute hidden
                     group-hover:block  text-center -left-10 top-6 
                     w-36 bg-[var(--c-orange)] text-[var(--c-black)]">

                        <Link href={`/movies/upcoming`}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer rounded-t-lg">Upcoming</li>
                        </Link>

                        <Link href={`/movies/nowPlaying`}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer">Now Playing</li>
                        </Link>

                        <Link href={`/movies/popular`}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer">Popular</li>
                        </Link>

                        <Link href={`/movies/topRated`}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer rounded-b-lg">Top Rated</li>
                        </Link>
                    </ul>
                </div>

                <div>
                    <Link href={'/tv'} className="mx-2 hover:text-[var(--c-orange)]  transition-all duration-700">
                        <span>Tv's</span>
                    </Link>
                </div>

                <div>
                    <Link href={'/myList'} className="mx-2 hover:text-[var(--c-orange)]  transition-all duration-700">
                        <span>MyList</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header