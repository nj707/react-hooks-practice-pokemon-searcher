import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const { name, hp, sprites } = poke
  const [isSprite, setIsSprite] = useState(true)


  const handleClick = () => {
    setIsSprite(!isSprite)
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={isSprite ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
