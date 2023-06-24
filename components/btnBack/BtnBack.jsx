'use client'
import { useRouter } from "next/navigation"


const BtnBack  = ({style})=>{
    const router = useRouter();
    return(
        <button
        type="button"
        className={`${style}`}
         onClick={()=>router.back()}>Back</button>
    )
}

export default BtnBack