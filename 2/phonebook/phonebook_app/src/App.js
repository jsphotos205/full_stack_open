import { useState } from 'react'
import Note from './components/Note'

const App = () => {

  const [persons, setPersons] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName,
      number : newNumber,
      id : persons.length + 1,
   }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    if (persons.find(person => person.name === newName)){
      alert(newName + ' is already added to phonebook')
    }
  } 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberchange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: 
          <input
          value={newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          Number:
          <input
          value={newNumber}
          onChange={handleNumberchange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      <h2>Contacts</h2>
      <ul>
        {persons.map(person =>
          <Note key={person.id} note={person}/>
          )}
      </ul>
    </div>
  )
}

export default App