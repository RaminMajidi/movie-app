import Link from "next/link"

const BtnReade = ({url,title,classStyle}) => {

    return (
        <Link
            href={url}
            title={title}
            className={`bg-[var(--c-lblue)] px-2 py-1
            mt-1 rounded-md 
            hover:bg-[var(--c-blue)]
            transition-all inline-block ${classStyle}`}
            type="button"
        >
            Reade More
        </Link>
    )
}

export default BtnReade