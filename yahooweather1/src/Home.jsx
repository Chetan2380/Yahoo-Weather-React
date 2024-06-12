import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const router = useNavigate();
    const[weather,setWeather]=useState("");
    const[allweather,setAllWeather]=useState([]);

    function handleChange(event){
        setWeather(event.target.value);
    }

    function handleSubmit(){
        setAllWeather([...allweather,weather])
        setWeather("");
        router("/weatheryahoo");
    }
    
    return(
        <div id="home">
            <h1>Enter City Name</h1>
            <input type='text' name='weatherinput' onChange={handleChange}/><br/>
            <button onClick={handleSubmit}>Submit</button><br/>
            
            {allweather.map((weather)=>(
                <div>
                    <span>{""}{weather}</span>
                </div>
            ))}
        </div>
    )
}

export default Home;