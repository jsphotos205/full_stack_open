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
  console.log('STATISTICS props value is, ', props)

  if (props.response === 0){
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
      <p>{props.good} = {props.goodResponse}</p>
      <p>{props.neutral} = {props.neutralResponse}</p>
      <p>{props.bad} = {props.badResponse}</p>
      <p>{props.total} = {props.totalResponse}</p>
      <p>{props.average} = {props.averageResponse}</p>
      <p>{props.postive} = {props.positiveResponse}</p>
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
      <Statistics response={total} 
      good='Good ' goodResponse={good}
      neutral= 'Neutral ' neutralResponse={neutral}
      bad = 'Bad ' badResponse={bad}
      total= 'Total ' totalResponse={total}
      average= 'Average ' averageResponse={average}
      postive= 'Positive ' positiveResponse={calculatePositivePercentage() + '%'}
      />
    </div>
  )
}

export default App