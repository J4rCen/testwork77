import WeatherCard from "@/app/ui/weatherCard"

const WeatherPage = () => {
    return (
        <main className="container">
            <div className="row">
                <WeatherCard days={true}/>
            </div>
        </main>
    )
}

export default WeatherPage