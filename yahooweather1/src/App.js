import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import WeatherYahoo from './WeatherYahoo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/weatheryahoo' element={<WeatherYahoo />}/>
      </Routes>
    </div>
  );
}

export default App;
