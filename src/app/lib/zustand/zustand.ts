import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IFavoritesList {
    city: string
    date: string
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

const useStore = create<Store>()(persist(((set, get) => ({
    listWeather: [],
    favoritesList: [],
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    setDateDay: (list: any) => {
        const city = list.city?.name ?? ''
        
        const formatDate = (dateString: string): string => {
            const months: string[] = [
              "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
              "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
            ];
            
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return "Неверный формат даты";
            
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            const hours = date.getHours();
            
            return `${day} ${month} ${year} ${hours}:00 Часов`;
        };
          

        /* eslint-disable  @typescript-eslint/no-explicit-any */
        list.list.map((el: any) => {
            set((store) => ({
                listWeather: [...store.listWeather, {
                    city,
                    date: formatDate(el.dt_txt),
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

        const {favoritesList} = get()

        if (favoritesList.includes(list)) {
            alert("Город уже в избранном")
            return
        }

        set((store) => ({
            favoritesList: [
                ...store.favoritesList,
                list
            ]
        }))

        alert('Город добавлен в избранное')
    },
    deleteFavorites: (list: string) => {
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