"use client"
import useStore from "@/app/lib/zustand/zustand"
import axios from "axios"

class weatherApi {
    private readonly api = '11eeda07de6aacfee7965797a135e957'
    private lat = 0
    private lon = 0

    private getPosition = async (city?: string) => {
        await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${this.api}`)
        .then((response) => {
            this.lon = response.data[0].lon
            this.lat = response.data[0].lat
        }).catch(err => console.error(err))
    }

    public getWeather =  async (city?: string, days: number = 1) => {

        await this.getPosition(city)

        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&cnt=${days}&units=metric&appid=${this.api}`)
        .then(response => response.data)
        .catch(err => console.error(err))
    }
}

export default new weatherApi()