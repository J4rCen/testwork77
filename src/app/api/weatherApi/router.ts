"use client"
import axios from "axios"

class weatherApi {
    private lat = 0
    private lon = 0

    private getPosition = async (city?: string) => {
        await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.NEXT_PUBLIC_API_WEATHER_KEY}`)
        .then((response) => {
            this.lat = response.data[0].lat
            this.lon = response.data[0].lon
        }).catch(err => {
            if(err) {
                alert("При поиски произошла ошибка, проверти корректное название введенного города")
            }

            console.error(err)
        })
    }

    public getWeather =  async (city?: string, days: number = 1) => {

        await this.getPosition(city)
       
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&cnt=${days}&units=metric&appid=${process.env.NEXT_PUBLIC_API_WEATHER_KEY}`)
        .then(response => response.data)
        .catch(err => console.error(err))
    }
}

const weatherApiInstance = new weatherApi();
export default weatherApiInstance;
