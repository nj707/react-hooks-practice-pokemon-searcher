import React from "react";

function Search({ changeSearchPokes }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(event) => changeSearchPokes(event.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
