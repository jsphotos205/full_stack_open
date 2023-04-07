const App = (props) => {

  const course = 'Half Stack application development'

  const sections = [
  {part1 : 'Fundamentals of React'},
  {part2 : 'Using props to pass data'},
  {part3 : 'State of a component'}
    ]

  const exercises = [
  {exercise1 : 10},
  {exercise2 : 7},
  {exercise3 : 14}
  ]

  const math = (10 + 7 + 14)

  const Header = (props) => {
    return(
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = (props) => {
      return(
        <div>
          <Part name={sections[0].part1} exercise={exercises[0].exercise1}/>
          <Part name={sections[1].part2} exercise={exercises[1].exercise2}/>
          <Part name={sections[2].part3} exercise={exercises[2].exercise3}/>
        </div>
      )
    }

  const Part = (props) => {
    return(
      <div>
        <h2>Course Name :</h2>
        <p>"{props.name}"</p>
        <h3>Number of Exercises :</h3>
        <p>"{props.exercise}"</p>
      </div>
    )
  }

  const Total = (props) => {
    return(
      <div>
        <h2>Total Number of Exercises:</h2>
        <p>{math}</p>
      </div>
    )
  }
  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total math={exercises}/>
    </div>
  )
}

export default App