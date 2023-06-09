import { useState } from "react"

const Note = ({note}) => {
    return(
        <div>
            <p>{note.name} {note.number}</p>
        </div>
    )
}

const List = () => {

    const [persons, setPersons] = useState([
        { name: 'John Sloan', number: '205', id: 1 },
        { name: 'Eleanor Krause', number: '812', id: 2 },
        { name: 'Billy Simek', number: '508', id: 3 },
        { name: 'Katja', number: '860', id: 4 }
      ])

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

      const [state, setState] = useState({
        query : '',
        list : []
      })

      const handleChange = (e) => {
        const results = persons.filter(person => {
            if (e.target.value === "") return persons
            return person.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setState({
            query : e.target.value,
            list : results
        })
      }
      return (
        <form onSubmit={addPerson}>
            <div>

            <p>Filter Entries:</p>
            <div>
                <form>
                    <input type='search' value={state.query} onChange={handleChange}/>
                </form>
            </div>
            <h2>New Entry:</h2>
                <p>Name:</p>
                <input
                value={newName}
                onChange={handlePersonChange}/>
            </div>
            <div>
                <p>Number:</p>
                <input
                value={newNumber}
                onChange={handleNumberchange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            <h2>Contacts</h2>
            <ul>
                {(state.query === '' ? persons : state.list).map(person =>
                    <Note key={person.id} note={person}/>)}
            </ul>
        </form>
      )
}

export default List