"use client"
import useStore from "@/app/lib/zustand/zustand"
import './weatherCard.scss'
import { useEffect } from "react"

const WeatherCard = (days: {days?: boolean}) => {
    
    const store = useStore()

    const layout = (el: any, index?: number) => {
        console.log(el)
        return (
            <div className="container weatherCard" key={index}>
                <div className="row justify-content-center">
                    <img src={`https://openweathermap.org/img/wn/${el.image}@4x.png`} style={{height: 200, width: 200}} alt="" />
                </div>
                <div className="row-sm text-center">
                    <p>Город: {el.city}</p>
                    <p>Температура: {el.temp}</p>
                    <p>Погода: {el.weather}</p>
                    <p>Макс температура: {el.temp_max}</p>
                    <p>Мин температура: {el.temp_min}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="row gap-4">
            {
                store?.listWeather && store.listWeather.length > 0
                ? days?.days
                    ? store.listWeather.map((el, index) => layout(el, index))
                    : layout(store.listWeather[0])
                : null
            }
        </div>
    )
}

export default WeatherCard