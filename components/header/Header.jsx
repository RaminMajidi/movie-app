import Link from "next/link"

const Header = () => {
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
                        className="mx-2 hover:text-[var(--c-orange)]
                      transition-all duration-700">
                        <span >Home</span>
                    </Link>
                </div>

                <div className="relative group">
                    <Link href={'/categories/movie'}
                        className="mx-2 hover:text-[var(--c-orange)]
                        transition-all duration-700">
                        <span>Movies</span>
                    </Link>
                </div>

                <div className="relative group">
                    <Link href={'/categories/tv'}
                        className="mx-2 hover:text-[var(--c-orange)]
                        transition-all duration-700">
                        <span>Tv&apos;s</span>
                    </Link>
                </div>

                <div>
                    <Link href={'/search'}
                        className="mx-2 hover:text-[var(--c-orange)]
                      transition-all duration-700">
                        <span >Search</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header