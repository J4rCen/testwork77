import InputSearch from "./ui/inputSearch"
import WeatherCard from "./ui/weatherCard"

const Home = () => {
  return (
    <>
      <main className="container">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="row gap-4">
            <InputSearch/>
            <WeatherCard/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home