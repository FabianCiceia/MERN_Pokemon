import React, { useEffect, useState } from 'react'
import Pokemons from './Pokemons'
function Search() {
    const {names} = Pokemons();
    const[filtro, setFiltro] = useState();
    const[pokemones,setPokemones] = useState();

    useEffect(() => {
        const newPoke = names.filter((pokemon) => pokemon.includes(filtro));
        setPokemones(newPoke);
    }, [filtro]);

    return {
        pokemones,
        setFiltro
    }
}

export default Search
