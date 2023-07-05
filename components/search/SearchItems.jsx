'use client'
import Input from "./Input"
import Items from "./Items"
import { useEffect, useState } from "react"
import { Alert } from "../alert/Alert"


const SearchItems = () => {
    const [searchParam, setSearchParam] = useState('')
    const [data, setData] = useState()


    async function searchHandler() {
        const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${searchParam}&include_adult=false&language=en-US&page=1`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
            }
        });
        if (res.status === 200) {
            let data = await res.json()
            console.log(data)
            setData(data)
        }else
        if(res.status === 401 || res.status === 403){
            Alert('warning',"Please be careful when entering the name",'warning')
        }
        else {
            Alert('Error',"A problem occurred. Please try again at another time",'error')
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
            {
                data &&
                <Items data={data} />
            }

        </section>
    )
}

export default SearchItems