import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokes }) {
  const renderPokes = pokes.map((poke) => {
    return <PokemonCard
      key={poke.id}
      poke={poke}
    />
  })
  return (
    <Card.Group itemsPerRow={6}>
      <h1></h1>
      {renderPokes}
    </Card.Group>
  );
}

export default PokemonCollection;
