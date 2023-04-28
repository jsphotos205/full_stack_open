
import List from './components/List'

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Phonebook</h2>
      <p>Filter Entries:</p>
      {/* <form>
      <input type='search' value={state.search} onChange={handleSearchChange}/>
     </form> */}
      <h2>New Entry:</h2>
      <List />
    </div>
  )
}

export default App