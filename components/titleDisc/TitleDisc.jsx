
const TitleDisc = ({title,desc,children,style=''}) => {

    return (
        <h2
            className={`mb-3 mr-4 text-sm  md:text-lg ${style}`}>
            <span className="text-[var(--c-lblue)]">
                {title + " : "}  
            </span>
            {desc}
            {children}
        </h2>
    )
}
export default TitleDisc