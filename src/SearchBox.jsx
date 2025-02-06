import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {  // Destructure updateInfo properly
    let [city, setCity] = useState("");
    let [error, setError]= useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            // Make the API request
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
            // If the response is not OK, throw an error
            if (!response.ok) {
                throw new Error("City not found or invalid API request.");
            }
    
            let jsonResponse = await response.json();
    
            // Check if required data exists
            if (!jsonResponse.main || !jsonResponse.weather) {
                throw new Error("Incomplete data from the weather API.");
            }
    
            // Create the result object with data
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0]?.description || "No description available",
            };
    
            console.log(result);
            return result;
        } catch (err) {
            // Log the error and rethrow it for further handling
            console.error("Error fetching weather data:", err);
            throw err;  // Re-throwing the error so it can be handled in the calling function
        }
    };
    

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo(city);  // Make sure to pass the `city` to the function
        updateInfo(newInfo);  // Pass the new data to updateInfo

        }catch(err){
            setError(true)

            
        }
        
    };

    return (
        <div className='SearchBox '>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}
