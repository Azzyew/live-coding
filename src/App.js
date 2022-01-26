import React, { useState, useEffect } from 'react';
import * as apiService from './services/data';
import './App.css';
import CharacterCard from './components/CharacterCard';

function App() {

    const [name, setName] = useState('');
    const [characters, setCharacters] = useState([]);

    const handleFetchAll = async() => {
        try {
            const data = await apiService.fetchCharacters();
            setCharacters(data);
        } catch(err) {
            console.log(err);
        }
    }

    const handleFetchByName = async() => {
        try {
            const data = await apiService.fetchByName(name);
            setCharacters(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
      handleFetchAll();
    }, []);
    
  return (
    <div className="App">
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button type='submit' onClick={handleFetchByName}>Search by name</button> 

            {characters.map(character => 
            <CharacterCard 
                data={character}
            />)}
    </div>
  );
}

export default App;
