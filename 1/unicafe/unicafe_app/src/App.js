import { useState } from 'react'

// const Display = props => <div>{props.value}</div>

const Header = (props) => {
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      <h2>Statistics</h2>
    </div>
  )
}

const Button = (props) =>{
  const {handleClick, text} = props
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  

  const handleGoodClick = () => {
    console.log('good before', good)

    const updatedGood = good + 1

    setGood(updatedGood)
    console.log('good after', updatedGood)

    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    console.log('neutral before', neutral)

    const updatedNeutral = neutral + 1

    setNeutral(updatedNeutral)
    console.log('neutral after', updatedNeutral)

    setTotal(updatedNeutral + good + bad)
  }

  const handleBadClick = () => {
    console.log('bad before', bad)

    const updatedBad = bad + 1

    setBad(updatedBad)
    console.log('bad after', updatedBad)

    setTotal(updatedBad + neutral + good)
  }

  return (
    <div>
      {/* <Display value={total}/> */}
      <Header text='Please Give Feedback'/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Footer />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
    </div>
  )
}

export default App