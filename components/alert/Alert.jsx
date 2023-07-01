'use client'
import Swal from 'sweetalert2'

export const Alert =(title,text,icon,)=>{
    return (
        Swal.fire({
            title,
            text,
            icon,
          })
    )
}

