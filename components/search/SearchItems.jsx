'use client'
import CircleLoading from "../loading/CircleLoading"
import Input from "./Input"
import Items from "./Items"
import { useEffect, useState } from "react"
import { Alert } from "../alert/Alert"
import Image from "next/image"


const SearchItems = () => {
    const [searchParam, setSearchParam] = useState('')
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);

    async function searchHandler() {
        setLoading(true)
        const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${searchParam}&include_adult=false&language=en-US&page=1`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODI3ZWIwYWMyMGM2NjNlZjA0ZGVjMDRmNzQ2MDAyZCIsInN1YiI6IjY0NjEyYzJhYzY4YjY5MDBmYzJhMDMyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8T3tLC8fjQtRPAru3KVmwAbUTy0m3V0o4zbJ9ToSYYE`
            }
        });
        if (res.status === 200) {
            let data = await res.json()
            setData(data)
            setLoading(false)
        } else
            if (res.status === 401 || res.status === 403) {
                Alert('warning', "Please be careful when entering the name", 'warning')
                setLoading(false)
            }
            else {
                Alert('Error', "A problem occurred. Please try again at another time", 'error')
                setLoading(false)
            }

    }


    useEffect(() => {

    }, [])
    return (
        <section>
            <Input
                searchParam={searchParam}
                setSearchParam={setSearchParam}
                searchHandler={searchHandler}
                type={"text"}
            />
            {loading ? (<CircleLoading />) :
                data ? (<Items data={data} />) :
                    (
                        <Image
                            className="w-[60vw] md:w-[40vw] max-w-[1000px]
                             mt-4 mx-auto"
                            src={"/img/Home-cinema.svg"}
                            width={800}
                            height={800}
                            alt="Searc Image"
                        />
                    )}

        </section>
    )
}

export default SearchItems