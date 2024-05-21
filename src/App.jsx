import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([])
  const URL = useState('https://pokeapi.co/api/v2/pokemon/?limit=10277')

  /* const fetchPokemon = async () => {
    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error('Fallo al obtener los datos del servidor')
    } else {
      console.log('Datos obtenidos correctamente')
    }
    const data = await response.json()
    setPokemon(data.results)
  } */


  // Usando axios
  const fetchPokemon = () => {
    axios.get(URL)
      .then((response) => {
        console.log(response.data)
        setPokemon(response.data.results)
      }).catch(() => {
        console.log('Error al obtener los datos del servidor')
      })
  }

  return (
    <>
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo de PokeAPI" />
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <div className="pokedex">
        {pokemon.map((poke) => {
          const pokeId = poke.url.split('/')[6]
          return (
            <div className='card-pokemon' key={pokeId}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`} alt="Imagen de un Pokémon" />
              <h2>{poke.name}</h2>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
