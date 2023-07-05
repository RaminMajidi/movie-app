"use client"
import { useState } from "react"
import { BiSearchAlt } from "react-icons/bi"

const Input = ({ searchParam, setSearchParam, searchHandler, classStyle }) => {

    const [error, setError] = useState(false)

    function changeHandler(e) {
        let search = e.target.value
        setSearchParam(search)
        if (error && search.length >= 3) {
            setError(false)
        }
    }

    function keyUpHandler (key){
        if(key === 'Enter'){
            searchHandeler()
        }
    }

    function searchHandeler() {
        if (searchParam.length >= 4) {
            setError(false)
            searchHandler()
        } else {
            setError(true)
        }
    }

    return (
        <div className="relative">
            <input
                onKeyUp={(e)=>keyUpHandler(e.key)}
                value={searchParam}
                onChange={(e) => changeHandler(e)}
                type={"text"}
                placeholder={"Search Movie And Tv"}
                className={`w-full my-2 rounded-xl px-4 py-1 
            bg-[var(--c-gray)] text-[var(--c-black)] outline-none
            text-lg font-semibold ${classStyle}`}
            />
            <BiSearchAlt
                onClick={searchHandeler}
                size={24}
                title="Search"
                className="absolute right-4 top-4 cursor-pointer
         text-[var(--c-orange)] "/>
            <p className={`text-red-500 pl-3 tracking-wider ${!error ? "hidden" : "block"}`}>
                Please enter at least 4 characters
            </p>
        </div>

    )
}

export default Input