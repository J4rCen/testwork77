"use client"
import useStore from "@/app/lib/zustand/zustand"
import WeatherCard from "@/app/ui/weatherCard"
import trash from '@/public/trash.png'
import Image from 'next/image'
import weatherApi from "@/app/api/weatherApi/router"
import './favorites.scss'

const favoritesPage = () => {

    const store = useStore()

    const search = async (el: string) => {
    
        store.deleteList()
    
        store.setDateDay(await weatherApi.getWeather(el, 6))
    }

    return (
        <main className="container justify-content-center d-flex">
            <div className="row border border-primary rounded favoritesPage justify-content-center">
                <div className="col col-lg-4 text-center favoritesPage_list_button">
                {   store.favoritesList.length > 0 
                        ? store.favoritesList.map((el, index) => {
                            return <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                <button key={index} type="button" onClick={() => search(el)} className="btn btn-primary p-2">
                                    {el}
                                </button>
                                <button type="button" onClick={() => store.deleteFavorites(el)} className="btn btn-danger"> 
                                    <Image src={trash} alt="" />
                                </button>
                            </div>
                        })
                        : <p>Список пуст</p>
                    }
                </div>
                <div className="col">
                    <WeatherCard/>
                </div>
            </div>
        </main>
    )
}

export default favoritesPage