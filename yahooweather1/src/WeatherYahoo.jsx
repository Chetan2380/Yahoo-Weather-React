import { useEffect, useState } from "react";
import axios from "axios";
import '../src/WeatherYahoo.css'
import moment from "moment";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Home from "./Home";



function WeatherYahoo(props){
    const[weatheryah,setWeatheryah]=useState([]);
    const [loading, setLoading] = useState(false);
    const location=useLocation();
    const city1=location.state.weather;
    const router = useNavigate();
   

    // const{city}=useParams();
    // console.log(setWeatheryah);

    // async function GetWeather(){

    //     // const axios = require('axios');

    //     const options = {
    //     method: 'GET',
    //     url: 'https://yahoo-weather5.p.rapidapi.com/weather',
    //     params: {
    //         location: `${city1}`,
    //         format: 'json',
    //         u: 'f'
    //     },
    //     headers: {
    //         'x-rapidapi-key': '2d90b73b65msh5af945ed2540dd1p17ca2cjsnce2a3c1b00e3',
    //         'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    //     }
    //     };
            // setLoading(true);
    //     try {
    //         const response = await axios.request(options);
                // setLoading(false);
    //         // console.log(response.data);
    //         setWeatheryah([response.data]);
                
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    
    // useEffect(()=>{
    //     GetWeather()},[]);

    return(
        <div>
            <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
           
            {loading?(
                <div id="load">
                    <h1>Loading....</h1>
                </div>
            ):(<div>
                {weatheryah.map((response)=>(
                    <div>
                        <div id="parentdiv">
                            <div id="citylatlong">
                                <div id="citycountry">
                                    <div id="city">
                                        <p>{response.location.city}</p>
                                        <button onClick={()=>router("/")}>Change location</button><br/>
                                    </div>
                                    
                                    <p>{response.location.country}</p>
                                    <p><i>{new Date((response.current_observation.pubDate)*1000).toLocaleString()}</i> (Timezone: {response.location.timezone_id})</p>
                                </div>
                            </div>

                            <div id="condition">
                                <i class="fa-solid fa-cloud"></i><span>{response.current_observation.condition.text}</span>
                                <p>{response.current_observation.condition.temperature}&deg;F</p>
                            </div>

                            <div id="forecatsdetailswind">
                                <div id="forecast">
                                    <h2>Forecast</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Day</th>
                                                <th>Date</th>
                                                <th>Condition</th>
                                                <th>High</th>
                                                <th>Low</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>{response.forecasts[0].day}</td>
                                                <td>{new Date((response.forecasts[0].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[0].text}</td>
                                                <td>{response.forecasts[0].high}</td>
                                                <td>{response.forecasts[0].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[1].day}</td>
                                                <td>{new Date((response.forecasts[1].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[1].text}</td>
                                                <td>{response.forecasts[1].high}</td>
                                                <td>{response.forecasts[1].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[2].day}</td>
                                                <td>{new Date((response.forecasts[2].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[2].text}</td>
                                                <td>{response.forecasts[2].high}</td>
                                                <td>{response.forecasts[2].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[3].day}</td>
                                                <td>{new Date((response.forecasts[3].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[3].text}</td>
                                                <td>{response.forecasts[3].high}</td>
                                                <td>{response.forecasts[3].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[4].day}</td>
                                                <td>{new Date((response.forecasts[4].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[4].text}</td>
                                                <td>{response.forecasts[4].high}</td>
                                                <td>{response.forecasts[4].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[5].day}</td>
                                                <td>{new Date((response.forecasts[5].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[5].text}</td>
                                                <td>{response.forecasts[5].high}</td>
                                                <td>{response.forecasts[5].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[6].day}</td>
                                                <td>{new Date((response.forecasts[6].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[6].text}</td>
                                                <td>{response.forecasts[6].high}</td>
                                                <td>{response.forecasts[6].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[7].day}</td>
                                                <td>{new Date((response.forecasts[7].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[7].text}</td>
                                                <td>{response.forecasts[7].high}</td>
                                                <td>{response.forecasts[7].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[8].day}</td>
                                                <td>{new Date((response.forecasts[8].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[8].text}</td>
                                                <td>{response.forecasts[8].high}</td>
                                                <td>{response.forecasts[8].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[9].day}</td>
                                                <td>{new Date((response.forecasts[9].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[9].text}</td>
                                                <td>{response.forecasts[9].high}</td>
                                                <td>{response.forecasts[9].low}</td>
                                            </tr>

                                            <tr>
                                                <td>{response.forecasts[10].day}</td>
                                                <td>{new Date((response.forecasts[10].date)*1000).toLocaleString().split(',')[0]}</td>
                                                <td>{response.forecasts[10].text}</td>
                                                <td>{response.forecasts[10].high}</td>
                                                <td>{response.forecasts[10].low}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div id="windastroatmos">
                                    <div id="details">
                                        <div id="humidity">
                                            <i class="fa-solid fa-droplet"></i>
                                            <span>Humidity: {response.current_observation.atmosphere.humidity}%</span>
                                        </div>
                                        <div id="visibility">
                                            <i class="fa-regular fa-eye"></i>
                                            <span>Visibility: {response.current_observation.atmosphere.visibility} miles</span>
                                        </div>
                                        <div id="pressure">
                                            <i class="fa-solid fa-gauge-high"></i>
                                            <span>Pressure: {response.current_observation.atmosphere.pressure} mb</span>
                                        </div>
                                    </div>

                                    <div id="sunrisesunset">
                                        <div id="sunrise">
                                            <i class="fa-solid fa-sun"></i>
                                            <span>Sunrise: {response.current_observation.astronomy.sunrise}</span>
                                        </div>

                                        <div id="sunset">
                                            <i class="fa-regular fa-sun"></i>
                                            <span>Sunset: {response.current_observation.astronomy.sunset}</span>
                                        </div>
                                    </div>
                                    <div id="windchill">
                                        <div id="wind">
                                            <i class="fa-solid fa-wind"></i>
                                            <span>Wind : {response.current_observation.wind.speed} mph {response.current_observation.wind.direction}</span>
                                        </div>
                                        <div id="chill">
                                            <i class="fa-regular fa-snowflake"></i><span>Chill: {response.current_observation.wind.chill}</span>
                                        </div>
                                    </div>

                                    <div id="longlatwoe">
                                        <div id="longlatlogo">
                                            <i class="fa-solid fa-globe"></i>
                                        </div>
                                        <div id="longlatwoetext">
                                            <div id="longitude">
                                                <p>Longitude: {response.location.long}</p>
                                            </div>

                                            <div id="latitude">
                                                <p>Latitude: {response.location.lat}</p>
                                            </div>

                                            <div id="woeid">
                                                <p>WOEID: {response.location.woeid}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>          
                    </div>
                ))}
            </div>)}
        </div>
    );
}

export default WeatherYahoo;