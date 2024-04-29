import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weather, setWeather] = useState({
    feels_like: 34.39,
    humidity: 13,
    pressure: 1003,
    temp: 36.99,
    temp_max: 36.99,
    temp_min: 36.99,
    weather: "Dust",
  });

  let getCity = (result) => {
    setWeather(result);
  };

  return (
    <div>
      <h2 className="heading">SkyHigh</h2>
      <SearchBox getCity={getCity} />
      <InfoBox info={weather} />
    </div>
  );
}
