import { useState } from 'react'

const App = (props) => {
  console.log(props)
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGoodValue = (newGoodValue) => () => {
    console.log('value now', newGoodValue)
    setGood(newGoodValue)
  }
  const setToNeutralValue = (newNeutralValue) => () => {
    console.log('value now', newNeutralValue)
    setNeutral(newNeutralValue)
  }
  const setToBadValue = (newBadValue) => () => {
    console.log('value now', newBadValue)
    setBad(newBadValue)
  }

  const Header = () =>{
    return(
      <div>
        <h1>Please Give Feedback</h1>
      </div>
    )

  }
  const Button = (props) =>{
    console.log(props)
    return(
      <div>
        <button>
          {props.text}
        </button>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Button onClick={setToGoodValue(good + 1)} text='good'/>
      <Button onClick={setToNeutralValue(neutral + 1)} text='neutral'/>
      <Button onClick={setToBadValue(bad + 1)} text='bad'/>
    </div>
  )
}

export default App