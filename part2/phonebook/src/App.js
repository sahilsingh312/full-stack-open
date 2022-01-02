import React, { useState, useEffect } from "react";
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = function (e) {
    e.preventDefault();
    const found = persons.find((p) => p.name === newName);
    if (found) {
      window.alert(` ${newName} is already added to the phonebook`);
    } else {
      const personObj = { name: newName };
      setPersons(persons.concat(personObj));
      setNewName("");
    }
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.length}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

// const found = persons.find( p => p.name === newName)
// if( found) {
//  Alert stuff
// } else {
// setPersons( prev => prev.concat({ name: newName}))
// }
