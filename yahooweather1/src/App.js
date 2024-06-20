import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import WeatherYahoo from './WeatherYahoo';
import WeatherYahoocopy from './WeatherYahoo copy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/weatheryahoo' element={<WeatherYahoo />}/>
        <Route path='/weatheryahoo1' element={<WeatherYahoocopy />}/>
      </Routes>
    </div>
  );
}

export default App;
