import InputSearch from "@/app/ui/inputSearch"
import WeatherCard from "@/app/ui/weatherCard"

const WeatherPage = () => {
    return (
        <main className="container">
        <div className="">
        <div className="row justify-content-center">
            <InputSearch/>
          </div>
          <div className="row">
            <WeatherCard days={true}/>
          </div>
        </div>
      </main>
    )
}

export default WeatherPage