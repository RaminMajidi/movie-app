'use client'
import { useRouter } from "next/navigation";


const BtnBack = ({ style }) => {
    const router = useRouter()
    return (
        <button
            className={`${style}`}
            onClick={() => router.back()}
        >
            Go back
        </button>
    )
}

export default BtnBack