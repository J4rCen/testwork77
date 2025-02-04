import { create } from 'zustand'
import weatherApi from '../../api/weatherApi/router'
import { persist } from 'zustand/middleware'

interface IFavoritesList {
    city: string
    temp: number
    temp_max: number
    temp_min: number
    weather: string
    image?: string
    lon?: number
    lat?: number
}

interface Store extends IFavoritesList {
    favoritesList: IFavoritesList[]
    setDateDay: (date: IFavoritesList, cityName?: string, weather?: any) => void
    setDateDays: (date: IFavoritesList[]) => void
}

const useStore = create<Store>()(persist((set => ({
    city: '',
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    weather: '',
    image: '',
    favoritesList: [],
    setDateDay: (list: any) => {
        const city = list.city.name
        const {temp, temp_max, temp_min} = list.list[0].main
        const {main, icon} = list.list[0].weather[0]

        set({city, temp, temp_max, temp_min, weather: main, image: icon})
    },
    setDateDays: async (list) => {
       
    },
})), 
    {
       name: "user-storage"
    }
))

export default useStore