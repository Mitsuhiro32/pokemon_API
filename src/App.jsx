import { useState } from 'react'
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState([])
  const URL = useState('https://pokeapi.co/api/v2/pokemon/?limit=10277')

  const fetchPokemon = async () => {
    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error('Fallo al obtener los datos del servidor')
    } else {
      console.log('Datos obtenidos correctamente')
    }
    const data = await response.json()
    setPokemon(data.results)
  }

  return (
    <>
      <h1>Pokemon API</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemon.map((poke, index) => {
          return <li key={index}>{poke.name}</li>
        })}
      </ul>
    </>
  )
}

export default App
