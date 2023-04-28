
import List from './components/List'

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Phonebook</h2>
      <List />
    </div>
  )
}

export default App