import style from "./styles.module.css"
const SearchLoading = () => {

    return (
        <section className={style.searchLoading}>
            <div className={style.loader}>
                <div className={style.loader_circle}></div>
                <span className={style.loader_text}>Loading...</span>
            </div>
        </section>

    )
}

export default SearchLoading