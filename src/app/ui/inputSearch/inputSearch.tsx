"use client"
import weatherApi from "@/app/api/weatherApi/router"
import useStore from "@/app/lib/zustand/zustand"
import { useState } from "react"
import './inputSearch.scss'

const InputSearch = (props: {days?: boolean}) => {

    const store = useStore()
    const [cityName, setCityName] = useState<string>('')

    const search = async () => {
        if (cityName == '') {
            alert('Введите название города')
            return
        }

        store.deleteList()

        store.setDateDay(await weatherApi.getWeather(cityName, 5))
    }

    return (
        <div className="inputSearch">
            <div className="input-group">
                <input type="search" 
                    value={cityName} 
                    onChange={(el) => setCityName(el.target.value)} 
                    className="form-control rounded" 
                    placeholder="Введите название города" 
                    aria-label="Search" 
                    aria-describedby="search-addon" 
                />
                <button type="button" onClick={() => search()} className="btn btn-outline-primary" data-mdb-ripple-init>search</button>
            </div>
        </div>
        
    )
}

export default InputSearch