import Link from "next/link"


const Header = () => {
    return (
        <header className="bg-yellow-400 font-bold text-gray-900 fixed w-full h-[3rem] top-0 left-0 px-2 py-4 flex justify-between items-center">
            <div>
                <h2 className="hidden sm:block">Movie App</h2>
            </div>
            <div>
                <Link href={'/'} className="mx-2 hover:text-red-500  transition-all duration-700">
                    <span >Home</span>
                </Link>

                <Link href={'/movies'} className="mx-2 hover:text-red-500  transition-all duration-700">
                    <span>Movies</span>
                </Link>

                <Link href={'/tv'} className="mx-2 hover:text-red-500  transition-all duration-700">
                    <span>Tv's</span>
                </Link>

                <Link href={'/myList'} className="mx-2 hover:text-red-500  transition-all duration-700">
                    <span>MyList</span>
                </Link>
            </div>
        </header>
    )
}

export default Header