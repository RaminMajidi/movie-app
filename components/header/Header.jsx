import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-[var(--c-bg)] text-[var(--c-gray)]
         border-b-2 font-bold  fixed w-full h-[3rem] top-0 left-0
          z-50 px-6 py-4 flex justify-between items-center">
            <div>
                <h2 className="">Movie App</h2>
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
                     group-hover:block  text-center -left-6 top-6 
                     w-28 bg-[var(--c-orange)] text-[var(--c-black)]">

                        <Link href={'/movie/upcoming'}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer rounded-t-lg">Upcoming</li>
                        </Link>

                        <Link href={'/movie/nowPlaying'}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer">Now Playing</li>
                        </Link>

                        <Link href={'/movie/popular'}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer">Popular</li>
                        </Link>

                        <Link href={'/movie/topRated'}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer rounded-b-lg">Top Rated</li>
                        </Link>
                    </ul>
                </div>

                <div className="relative group">
                    <button type="button"
                        className="group mx-2 hover:text-[var(--c-orange)] 
                      transition-all duration-700">
                        <span>Tv's</span>
                    </button>
                    <ul className="group rounded-lg absolute hidden
                     group-hover:block  text-center -left-16 top-6 
                     w-28 bg-[var(--c-orange)] text-[var(--c-black)]">

                        <Link href={'/tv/airingToday'}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer rounded-t-lg">Airing Today</li>
                        </Link>

                        <Link href={'/tv/onTheAir'}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer">On The Air</li>
                        </Link>

                        <Link href={'/tv/popular'}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer">Popular</li>
                        </Link>

                        <Link href={'/tv/topRated'}>
                            <li className="p-1 hover:bg-[var(--c-black)]
                         hover:text-[var(--c-orange)] transition-all
                          cursor-pointer rounded-b-lg">Top Rated</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header