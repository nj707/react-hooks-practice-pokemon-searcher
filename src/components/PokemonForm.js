import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const initialVal = {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: "",
}

function PokemonForm({ onAddPoke }) {
  const [pokeForm, setPokeForm] = useState(initialVal)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPokeForm({ ...pokeForm, [name]: value })
  }

  const handleSubmit = (event) => {
    const newPoke = {
      name: pokeForm.name,
      hp: pokeForm.hp,
      sprites: {
        front: pokeForm.frontUrl,
        back: pokeForm.backUrl,
      }
    }
    event.preventDefault()
    onAddPoke(newPoke)
    setPokeForm(initialVal)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}

      >
        <Form.Group widths="equal">
          <Form.Input
            fluid label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={pokeForm.name}

          />
          <Form.Input fluid label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleChange}
            value={pokeForm.hp}

          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={pokeForm.frontUrl}

          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={pokeForm.backUrl}

          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
