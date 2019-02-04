import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    let nameExists = false
    persons.forEach(function (object) {
      if (object.name === newName) {
        setNewName('')
        setNewNumber('')
        window.alert(`${newName} on jo luettelossa`)
        nameExists = true
      }
    })
    if (!nameExists) {
      setMessage(`Lisättiin ${newName}`)
      setTimeout(() => {
        setMessage(null)
      }, 3000)
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })

    }
  }
  const deletePerson = id => {
    const person = persons.find(p => p.id === id)
    const result = window.confirm(`Poistetaanko ${person.name}?`)
    if (result) {
      setMessage(`Poistettiin ${person.name}`)
      setTimeout(() => {
        setMessage(null)
      }, 3000)
      personService.deletePerson(id)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const filter = () => {
    let filtered = persons
    filtered = filtered.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
    return (
      filtered
    )

  }

  const handleNewFilterChange = (event) => {
    // console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }



  return (
    <div>
      <h2>Puhelinluettelo</h2>

      < Notification message={message} />
      
      <Filter
        newFilter={newFilter}
        handleNewFilterChange={handleNewFilterChange}
      />

      <h3>Lisää uusi</h3>

      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />

      <h3>Numerot</h3>

      <Persons persons={filter()} deletePerson={deletePerson} />
    </div>
  )

}

export default App;
