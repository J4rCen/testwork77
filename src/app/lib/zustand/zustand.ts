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

interface Store {
    listWeather: IFavoritesList[]
    favoritesList: string[]
    setDateDay: (date: IFavoritesList) => void
    setFavorites: (date: string) => void
    deleteList: () => void
    deleteFavorites: (date: string) => void
}

const useStore = create<Store>()(persist((set => ({
    listWeather: [],
    favoritesList: [],
    setDateDay: (list: any) => {
        const city = list.city?.name ?? ''
        
        list.list.map((el: any) => {
            set((store) => ({
                listWeather: [...store.listWeather, {
                    city, 
                    temp: el.main.temp, 
                    temp_max: el.main.temp_max, 
                    temp_min: el.main.temp_min, 
                    weather: el.weather[0].main, 
                    image: el.weather[0].icon
                }]
            }))  
        })
    },
    deleteList: () => {
        set(({
            listWeather: []
        }))
    },
    setFavorites: (list: string) => {
        set((store) => ({
            favoritesList: [
                ...store.favoritesList,
                list
            ]
        }))
    },
    deleteFavorites: (list: any) => {
        set(store => ({
            favoritesList: store.favoritesList.filter(el => el != list)
        }))
    },
})), 
    {
       name: "user-storage"
    }
))

export default useStore