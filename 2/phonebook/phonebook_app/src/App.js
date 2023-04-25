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
  } 

  const [newName, setNewName] = useState('a new name')

  const handlePersonChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  // const [showAll, setShowAll] = useState(true)

  // const personToShow = showAll
  // ? persons
  // : persons.filter(person => person.important)

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
      {/* <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div> */}
      <ul>
        {persons.map(person =>
          <Note key={person.id} note={person}/>
          )}
      </ul>
    </div>
  )
}

export default App