import { useState } from 'react'
import Note from './components/Note'

const App = () => {

  const [persons, setPersons] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName,
      id : persons.length + 1,
   }
    setPersons(persons.concat(personObject))
    setNewName('')
    if (persons.find(person => person.name === newName)){
      alert(newName + ' is already added to phonebook')
    }
  } 

  const [newName, setNewName] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input
          value={newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Note key={person.id} note={person}/>
          )}
      </ul>
    </div>
  )
}

export default App