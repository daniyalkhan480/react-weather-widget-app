import SearchBox from './SearchBox';
import "./WeatherApp.css"
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city : "Faisalabad",
        feels_like: 23.69,
        humidity: 24,
        temp: 24.55,
        temp_max: 24.55,
        temp_min: 24.55,
        weather: "clear sky"
    });

    const updateInfo = (newInfoAPI)=>{
        setWeatherInfo(newInfoAPI);
    }
    return (
        <div className='whApp'>
            <div style={{border: "1px solid maroon", padding : "1rem", borderRadius : "1rem"}}>
                <h1>Weather App</h1>
                <SearchBox updateInfo = {updateInfo}/>
                <hr />
                <InfoBox info = {weatherInfo}/>
            </div>
        </div>
    )
}