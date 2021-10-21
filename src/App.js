// import logo from './logo.svg';\
import React, {useState,useEffect} from 'react';

function App() {

const [allPokemons, setAllPokemons] = useState([])
const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

const getAllPokemons = async () => {
  const res = await fetch(loadMore)
  const data = await res.json()

  console.log(data)
}
useEffect(() => {
 getAllPokemons()
}, [])
  return (
    <div className="app-container">
     <h1>Pokemon App</h1>
     <div className = "pokeman-container">
       <div className = "all-container">

         </div>
         <button className = "load-more">Load More</button>
       </div>

    </div>
  );
}

export default App;
