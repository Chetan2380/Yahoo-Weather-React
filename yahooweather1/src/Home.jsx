import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherYahoo from './WeatherYahoo';
import '../src/Home.css'
import { CityContext } from './context/city.context';

function Home(){
    const router = useNavigate();
    const[weather,setWeather]=useState("");
    const[allweather,setAllWeather]=useState([]);
    const {state,dispatch}=useContext(CityContext);

    function handleChange(event){
        setWeather(event.target.value);
    }

    function handleSubmit(){
        setAllWeather([...allweather,weather])
        dispatch({type: "SEARCH", payload: weather})
        setWeather("");
        router("/weatheryahoo");
    }
    
    return(
        <div id="home">
            <h1>Enter City Name</h1><br/>
            <input type='text' name='weatherinput' onChange={handleChange}/><br/><br/>
            <button onClick={handleSubmit}>Search</button><br/>
            
            {allweather.map((weather)=>(
                <div>
                    <span>{""}{weather}</span>
                </div>
            ))}
            
        </div>
    )
}

export default Home;