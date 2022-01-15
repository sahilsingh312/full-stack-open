import React, { useState, useEffect } from "react";
import phonebookService from "./Services/phonebook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    phonebookService.getAll().then((initialPhonebook) => {
      setPersons(initialPhonebook);
    });
  }, []);

  const addPerson = function (e) {
    e.preventDefault();
    let personId;
    let changedNumber;
    const found = persons.find((p) => {
      personId = p.id
      changedNumber = {...p, number: newPhoneNumber}
      return p.name === newName;
      
    });
    let personObj;
    if (found) {
      if(
      window.confirm(` ${newName} is already added to the phonebook, replace the old number with a new one ?`)){
       
        phonebookService.update(personId, changedNumber).then((returnedPerson) => {
          setPersons(persons.map(person => person.id !== personId ? person : returnedPerson))
        }).catch(error => {
          console.log(error);

          setMessage(`Information of ${newName} has already been removed from the server`)
          setTimeout(() =>{
            setMessage(null)
          }, 5000)
        })
        setNewName("");
        setNewPhoneNumber("");
      };

    } else {
      personObj = { name: newName, number: newPhoneNumber };
      setPersons(persons.concat(personObj));
      setNewName("");
      setNewPhoneNumber("");

      phonebookService.create(personObj).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setMessage(`Added ${returnedPerson.name}`);
        setTimeout(() =>{
          setMessage(null)
        }, 5000)
      });
    }

   
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };

  const handleSearch = (e) => {
    let keyword = e.target.value;
    setNewSearch(e.target.value);
    const result = persons.filter((person) => {
      return person.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setPersons(result);
  };

  const onDelete = function (id, name) {
    if (window.confirm(`Delete ${name} ?`)) {
      phonebookService.deleteUser(id)
      const newPersons = persons.filter((person) => person.id !== id);
      setPersons(newPersons)
    }
  
  };



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {message}/>
      <Filter handleSearch={handleSearch} keyword={newSearch} />
      <h2>add a new</h2>
      <PersonForm
        personName={newName}
        handleNameChange={handleNameChange}
        phoneNumber={newPhoneNumber}
        handleNumberChange={handleNumberChange}
        onSubmit={addPerson}
      />

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person
          key={person.id}
            person={person}
            onDelete={() => onDelete(person.id, person.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
