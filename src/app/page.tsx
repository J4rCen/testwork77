import InputSearch from "./ui/inputSearch"
import WeatherCard from "./ui/weatherCard"

const Home = () => {
  return (
    <>
      <main className="container center">
      <div className="row justify-content-center">
            <InputSearch />
          </div>
          <div className="row">
            <WeatherCard/>
          </div>
      </main>
    </>
  )
}

export default Home