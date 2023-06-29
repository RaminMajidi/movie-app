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
            <p className="font-bold ml-1">{average.toFixed(1)}</p>
            <div className="flex">
            <BsFillStarFill
                className="ml-1"
                color={`${data >= 2 ? 'gold' : 'gray'}`}
            />
            <BsFillStarFill
                className="ml-1"
                color={`${data >= 4 ? 'gold' : 'gray'}`}
            />
            <BsFillStarFill
                className="ml-1"
                color={`${data >= 6 ? 'gold' : 'gray'}`}
            />
            <BsFillStarFill
                className="ml-1"
                color={`${data >= 8 ? 'gold' : 'gray'}`}
            />
            <BsFillStarFill
                className="ml-1"
                color={`${data >= 9 ? 'gold' : 'gray'}`}
            />
            </div>
        </div>
    )
}

export default AverageStars