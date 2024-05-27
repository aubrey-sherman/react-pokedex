import Pokecard from "./Pokecard.jsx";

/** Pokedex div of a collection of pokemon cards */
function Pokedex({ pokemon }) {

  const pokecards = pokemon.map(
    p => <Pokecard
      name={p.name}
      type={p.type}
      exp={p.base_experience}
      id={p.id} />
  );

  return (<div className="Pokedex">{pokecards}</div>);
}

export default Pokedex;