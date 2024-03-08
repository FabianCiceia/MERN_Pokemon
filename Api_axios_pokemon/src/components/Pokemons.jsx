import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemons() {
    const [datos, setDatos] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
            .then(response => {
                setDatos(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        const newNames = datos.map(item => item.name);
        setNames(newNames);
        
    }, [datos]);

    return {names};

}

export default Pokemons;
