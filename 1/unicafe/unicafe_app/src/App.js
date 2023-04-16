import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) =>{
  console.log('props value is, ', props)
  const {handleClick, text} = props
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  console.log('props value is, ', props)

  return(
    <div>
      <p>{props.text} = {props.response}</p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    console.log('good before', good)

    const updatedGood = good + 1

    setGood(updatedGood)
    console.log('good after', updatedGood)

    setTotal(updatedGood + neutral + bad)
    calculateAverage(updatedGood, neutral, bad)
  }

  const handleNeutralClick = () => {
    console.log('neutral before', neutral)

    const updatedNeutral = neutral + 1

    setNeutral(updatedNeutral)
    console.log('neutral after', updatedNeutral)

    setTotal(updatedNeutral + good + bad)
    calculateAverage(good, updatedNeutral, bad)
  }

  const handleBadClick = () => {
    console.log('bad before', bad)

    const updatedBad = bad + 1

    setBad(updatedBad)
    console.log('bad after', updatedBad)

    setTotal(updatedBad + neutral + good)
    calculateAverage(good, neutral, updatedBad)
  }

  const calculateAverage = (good, neutral, bad) => {
    const totalFeedback = good + neutral + bad
    const average = (good - bad) / totalFeedback
    setAverage(average)
  }

  const calculatePositivePercentage = () => {
    const totalFeedback = good + neutral + bad
    const positvePercentage = (good / totalFeedback) * 100
    return positvePercentage
  }

  return (
    <div>
      <Header text='Please Give Feedback'/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h2>Statistics:</h2>
      <Statistics text='Good ' response={good}/>
      <Statistics text='Neutral ' response={neutral}/>
      <Statistics text='Bad ' response={bad}/>
      <Statistics text='Total ' response={total}/>
      <Statistics text='Average ' response={average}/>
      <Statistics text='Positive Percent ' response={calculatePositivePercentage() + '%'}/>
    </div>
  )
}

export default App