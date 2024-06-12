import { useNavigate } from 'react-router-dom';

function Home(){
    const router = useNavigate();
    
    return(
        <div id="home">
            <h1>Home</h1>
            <button onClick={()=>router("/use-navigate")}>Go to UserNavigate Page.</button>
        </div>
    )
}

export default Home;