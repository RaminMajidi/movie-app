'use client'
const BtnBack  = ({style})=>{
    return(
        <button
        type="button"
        className={`${style}`}
         onClick={()=>history.back()}>Back</button>
    )
}

export default BtnBack