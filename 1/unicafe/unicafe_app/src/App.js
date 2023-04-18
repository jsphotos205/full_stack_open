import { useState } from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.text}</h1>
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

const StatisticsLine = (props) => {
  const {text, value} = props
  return (
    <div>
      <p>{text} = {value}</p>
    </div>
  )
}

const Statistics = (props) => {
  console.log('STATISTICS props value is, ', props)

  const {response, good, neutral, bad, total, average, calculatePositivePercentage} = props

  if (response === 0){
    return (
      <div>
        <h1>Statistics: </h1>
        Feedback not given
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics: </h1>
      <StatisticsLine text='Good' value={good} />
      <StatisticsLine text='Neutral' value={neutral} />
      <StatisticsLine text='Bad' value={bad} />
      <StatisticsLine text='Total' value={total} />
      <StatisticsLine text='Average' value={average} />
      <StatisticsLine text='Positive' value={calculatePositivePercentage()+'%'} />
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

    const updatedGood = good + 1

    setGood(updatedGood)

    setTotal(updatedGood + neutral + bad)
    calculateAverage(updatedGood, neutral, bad)
  }

  const handleNeutralClick = () => {

    const updatedNeutral = neutral + 1

    setNeutral(updatedNeutral)


    setTotal(updatedNeutral + good + bad)
    calculateAverage(good, updatedNeutral, bad)
  }

  const handleBadClick = () => {

    const updatedBad = bad + 1

    setBad(updatedBad)

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
      <Statistics response={total} good={good} neutral={neutral} bad={bad} total={total} average={average} calculatePositivePercentage={calculatePositivePercentage}/>
    </div>
  )
}

export default App