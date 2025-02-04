"use client"
import weatherApi from "@/app/api/weatherApi/router"
import useStore from "@/app/lib/zustand/zustand"
import { useState } from "react"

const InputSearch = () => {

    const [cityName, setCityName] = useState<string>('')
    const store = useStore()

    const search = async () => {
        if (cityName == '') {
            alert('Введите название города')
            return
        }

        store.setDateDay(await weatherApi.getWeather(cityName))
    }

    return (
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
    )
}

export default InputSearch