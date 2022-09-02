import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/personsService'
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.some((person) => person.name === newName)) {
      const updatePerson = persons.find(person => person.name === newName)
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService.update(updatePerson.id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== updatePerson.id ? person : returnedPerson))
          setNotificationMessage(`${updatePerson.name} phone number has been updated`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
        .catch(() => {
          setNotificationMessage(`Information of ${updatePerson.name} has already been removed from the server`)
        })
      }
    } else {
      personsService.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName("")
        setNewNumber("")
        setNotificationMessage(`${returnedPerson.name} has been added to the phonebook`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleDeletePerson = (event) => {
    const id = event.target.id
    const name = event.target.name
    if (window.confirm(`Delete ${name} ?`)) {
      personsService.remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== parseInt(id)))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm onSubmit={addPerson} newName={newName} onNameChange={handleNameChange} newNumber={newNumber} onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchFilter={newFilter} onClick={(handleDeletePerson)} />
    </div>
  )
}

export default App