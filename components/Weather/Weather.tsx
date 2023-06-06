import { WeatherDataOption } from "@/constants/weather";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const Weather = () => {
  const [position, setPosition] = useState<{ lat: number; lon: number }>({lat: 0, lon:0});
  const [location, setLocation] = useState('');
  const [temperasur, setTemperasur] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPositionHandler);
    }
  }, []);

  useEffect(() => {
    const getWeatherData = async () => {
      const options = WeatherDataOption;
      options.params  = position
      try {
        const response = await axios.request(options);
        console.log(response.data)
        setLocation(response?.data?.data[0]?.city_name);
        setTemperasur(response?.data?.data[0]?.temp)
      } catch (error) {
        setLocation('N/A');
        setTemperasur('N/A')
      }
    };
    if (position?.lat && position.lon) {
     getWeatherData();
    }
  }, [position]);

  const setPositionHandler = (position: GeolocationPosition) => {
    setPosition({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  };

  return (
    <div className="flex shadow-lg p-5 rounded-xl w-1/4">
      <div className="mr-2">
        <WbSunnyIcon className="text-4xl text-yellow-400" />
      </div>
      <div>
        <p className="text-sm text-gray-400">{location}</p>
        <h1 className="text-2xl">
          {temperasur} <sup>o</sup> C
        </h1>
      </div>
    </div>
  );
};

export default Weather;
