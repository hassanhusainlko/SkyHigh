import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ getCity }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "88aebec3be43f7fd8ddb86a1400dc4e3";

  let handleInput = (event) => {
    let newCity = event.target.value;
    setCity(newCity);
  };

  let handleClick = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    let result = {
      feels_like: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      temp: jsonResponse.main.temp,
      temp_max: jsonResponse.main.temp_max,
      temp_min: jsonResponse.main.temp_min,
      weather: jsonResponse.weather[0].description,
    };

    getCity(result);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={handleInput}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" onClick={handleClick}>
          Search
        </Button>
      </form>
    </div>
  );
}
