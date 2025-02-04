"use client"
import useStore from "@/app/lib/zustand/zustand"
const WeatherCard = () => {

    const store = useStore()

    return (
        <div className="container text-center border border-primary rounded">
            <div className="row justify-content-center">
                <img src={`https://openweathermap.org/img/wn/${store.image}@4x.png`} style={{height: 200, width: 200}} alt="" />
            </div>
            <div className="row">
                <p>Город: {store.city}</p>
                <p>Температура: {store.temp}</p>
                <p>Погода: {store.weather}</p>
                <div className="row">
                    <div className="col"><p>Максимальная температура: {store.temp_max}</p></div>
                    <div className="col"><p>Минимальная температура: {store.temp_min}</p></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard