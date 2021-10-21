// import logo from './logo.svg';\
import React, {useState,useEffect} from 'react';

function App() {

const [allPokemons, setAllPokemons] = useState([])
const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

const getAllPokemons = async () => {
  const res = await fetch(loadMore)
  const data = await res.json()

  setLoadMore(data.next)
  function createPokemonObject (result) {
    result.forEach(async pokemon => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await res.json()

      setAllPokemons( currentList => [...currentList, data])
      await allPokemons.sort((a, b) => a.id - b.id)
    })
  }
  createPokemonObject(data.results)
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
