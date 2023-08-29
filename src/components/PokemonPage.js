import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const pokeUrl = "http://localhost:3001/pokemon"
  const [pokes, setPokes] = useState([])
  const [searchPokes, setSearchPokes] = useState("")


  useEffect(() => {
    fetch(pokeUrl)
      .then(res => res.json())
      .then(setPokes)
  }, [])


  const onAddPoke = (newPoke) => {
    const postRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(newPoke)
    }
    fetch(pokeUrl, postRequest)
      .then(res => res.json())
      .then(newPokeData =>
        setPokes([...pokes, newPokeData]))
  }


  const changeSearchPokes = (searchTerm) => {
    setSearchPokes(searchTerm)
  }
  const filterPokes = pokes.filter(pokes => pokes.name.toLowerCase().includes(searchPokes.toLowerCase()))


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        onAddPoke={onAddPoke} />
      <br />
      <Search
        changeSearchPokes={changeSearchPokes} />
      <br />
      <PokemonCollection
        pokes={filterPokes}
      />
    </Container>
  );
}

export default PokemonPage;
