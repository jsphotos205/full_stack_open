import { useState } from 'react'
// const Display = props => <div>{props.value}</div>

const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Footer = (props) => {
  console.log(props)
  return(
    <div>
      {props.text}
      {props.response}
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

const App = (props) => {

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
      {/* <Display value={total}/> */}
      <Header text='Please Give Feedback'/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h2>Statistics:</h2>
      <Footer text='Good ' response={good}/>
      <Footer text='Neutral ' response={neutral}/>
      <Footer text='Bad ' response={bad}/>
      <Footer text='Total ' response={total}/>
      <Footer text='Average ' response={average}/>
      <Footer text='Positive Percent ' response={calculatePositivePercentage() + '%'}/>
      {/* <p>Average {average}</p> */}
    </div>
  )
}

export default App