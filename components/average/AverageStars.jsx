'use client'
import { useEffect, useState } from "react"
import { BsFillStarFill } from "react-icons/bs"

const AverageStars = ({average,col}) => {
    const [data,setData] = useState(0)

    useEffect(()=>{
        setData(Math.floor(+average))
    }
    ,[average])

    return (
        <div className={`flex items-center ${col ? 'flex-col' : 'flex-row'}`}>
            <p className=" ml-1 text-base md:text-xl">{average.toFixed(1)}</p>
            <div className="flex items-center justify-center text-base md:text-xl">
            <BsFillStarFill
                className="ml-1 "
                color={`${data >= 2 ? 'gold' : 'black'}`}
            />
            <BsFillStarFill
                className="ml-1 "
                color={`${data >= 4 ? 'gold' : 'black'}`}
            />
            <BsFillStarFill
                className="ml-1 "
                color={`${data >= 6 ? 'gold' : 'black'}`}
            />
            <BsFillStarFill
                className="ml-1 "
                color={`${data >= 8 ? 'gold' : 'black'}`}
            />
            <BsFillStarFill
                className="ml-1 "
                color={`${data >= 9 ? 'gold' : 'black'}`}
            />
            </div>
        </div>
    )
}

export default AverageStars