import { useState, useEffect } from "react";
import axios from "axios";
import {
  InputCitySearch,
  TempWrapper,
  WeatherWrapper,
} from "../style/Elements";
import { SecBtn, TransparentBtn } from "../style/Button";

const Weather = () => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [isInputVisible, setIsInputVisible] = useState(false);

  const getWeatherData = async () => {
    try {
      const response =
        coordinates.latitude !== 0 &&
        (await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?${
            city !== null
              ? `q=${city}`
              : `lat=${coordinates.latitude}&lon=${coordinates.longitude}`
          }&appid=021cbeb6524e6c10b8d5ac497d7e73a3`
        ));

      setWeather({
        location: response.data.name,
        country: response.data.sys.country,
        weather: response.data.weather[0].main,
        weather_description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        temperature: (response.data.main.temp - 273.15).toFixed(0),
        temperature_min: (response.data.main.temp_min - 273.15).toFixed(2),
        temperature_max: (response.data.main.temp_max - 273.15).toFixed(2),
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } catch (e) {
      console.log(e);
    }
  };
  // useEffect(() => city !== null && localStorage.setItem("city", city), [city]);
  // // useEffect(() => {
  // //   city !== null && localStorage.setItem("city", city), [city];
  // // });
  useEffect(
    () =>
      navigator.geolocation.getCurrentPosition((x) =>
        setCoordinates({
          latitude: x.coords.latitude,
          longitude: x.coords.longitude,
        })
      ),
    []
  );

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line
  }, [coordinates, city]);

  return (
    <WeatherWrapper
      onKeyDown={(e) => e.code === "Enter" && setIsInputVisible(false)}
    >
      {weather !== null && (
        <>
          <TempWrapper>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              width="50px"
              height="50px"
              alt="weather-icon"
            />
            {weather.temperature}°C
          </TempWrapper>
          {isInputVisible && (
            <InputCitySearch
              type="text"
              placeholder="Enter city name"
              onKeyDown={(e) => e.code === "Enter" && setCity(e.target.value)}
            />
          )}
          {weather.location}
        </>
      )}
      <SecBtn onClick={() => setIsInputVisible(true)}>Change city</SecBtn>
    </WeatherWrapper>
  );
};
export default Weather;
