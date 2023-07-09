import SearchItems from "@/components/search/SearchItems"

export const metadata = {
    title: 'Movie-App | Search',
}

const SearchPage = () => {

    return (
        <section className="px-4">
            <SearchItems data={null} />
        </section>

    )
}

export default SearchPage 