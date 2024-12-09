import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    // giving state to input box
    const [city,setCity] = useState("");

    const API_URL = "http://api.openweathermap.org/geo/1.0/direct?"
    const API_WH_URL = "https://api.openweathermap.org/data/2.5/weather?";  //  weather api url
    const API_KEY = "89f25c9efd56a72f4cc651fc907e756e";


    const getWeatherInfo = async() =>{
        try{

            let responseGeo = await fetch(`${API_URL}q=${city}&limit=1&appid=${API_KEY}`);
            let jsonResponseGeo = await responseGeo.json();
            const lat = jsonResponseGeo[0].lat;
            const lon = jsonResponseGeo[0].lon;
    
            let responseWH = await fetch(`${API_WH_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            let jsonResponseWH = await responseWH.json();

            let info = {
                city : city,
                feels_like : jsonResponseWH.main.feels_like,
                humidity : jsonResponseWH.main.humidity,
                temp : jsonResponseWH.main.temp,
                temp_max : jsonResponseWH.main.temp_max,
                temp_min : jsonResponseWH.main.temp_min,
                weather : jsonResponseWH.weather[0].description,
            };

            updateInfo(info);
            // console.log(info);

        }catch(err){
            updateInfo(null);
        }

    }
    const handleChange =(evt)=>{
        setCity(evt.target.value);
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        // console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return (
    <div className='SearchBox'>
        <h4>Search for Weather</h4>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <TextField id="outlined-basic" label="Enter city name" variant="outlined" value={city} onChange={handleChange} required/>
            </div>
            <br /> 
            <Button variant="contained" type="submit" >Search</Button>
        </form>
    </div>)
}