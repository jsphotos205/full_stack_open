const App = () => {

  const course = 'Half Stack application development'

  const sections =[
    {part1 : 'Fundamentals of React', exercises1 : 10},
    {part2 : 'Using props to pass data', exercises2 : 7},
    {part3 : 'State of a component', exercises3 : 14}
  ]

  const math = (10 + 7 + 14)

  const Header = (props) => {
    console.log(props)
    return(
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
    const Content = (props) => {
      console.log(props)
      return(
        <div>
        <p>{sections[0].part1} {sections[0].exercises1}</p>
        <p>{sections[1].part2} {sections[1].exercises2}</p>
        <p>{sections[2].part3} {sections[2].exercises3}</p>
        </div>
      )
    }
  const Total = (props) => {
    console.log(props)
    return(
      <p>{math}</p>
    )
  }
  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total />
    </div>
  )
}

export default App
