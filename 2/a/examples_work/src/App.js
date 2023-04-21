import Note from "./components/Notes"

const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
{/* following way not recommended: */}
      {/* <ul>
        {notes.map((note, i) =>
        <li key={i}>
          {note.content}
        </li>)}
      </ul> */}
{/* recommended: */}
      <ul>
        {notes.map(note =>
        <Note key={note.id} note={note} />
        )}
      </ul>
      </ul>
    </div>
  )
}

export default App
