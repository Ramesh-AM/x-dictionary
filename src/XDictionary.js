import React, { useState } from 'react';

function XDictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
}

export default XDictionary;