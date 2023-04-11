const App = (props) => {

  const course = 'Half Stack application development'

  const parts = [
    {
      name : 'Fundementals of React',
      exercises : 10
    },
    {
      name : 'Using props to pass data',
      exercises : 7
    },
    {
      name : 'State of a component',
      exercises : 14
    }
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
          <Part name={parts[0].name} exercises={parts[0].exercises}/>
          <Part name={parts[1].name} exercises={parts[1].exercises}/>
          <Part name={parts[2].name} exercises={parts[2].exercises}/>
        </div>
      )
    }

  const Part = (props) => {
    console.log(props)
    return(
      <div>
        <h2>Course Name :</h2>
        <p>"{props.name}"</p>
        <h3>Number of Exercises :</h3>
        <p>{props.exercises}</p>
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
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App