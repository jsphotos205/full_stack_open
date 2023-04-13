import { useState } from 'react'

const App = (props) => {
  console.log(props)
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Header = () =>{
    return(
      <div>
        <h1>Give Feedback</h1>
      </div>
    )

  }
  const Button = (props) =>{
    console.log(props)
    return(
      <div>
        <button>button</button>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Button />
      <Button />
      <Button />
    </div>
  )
}

export default App