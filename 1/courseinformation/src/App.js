const App = (props) => {
  console.log(props)
  const course = {
    name : 'Half Stack application development',
    parts : [
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
  }

  const getTotalExercises = (parts) => {
    let totalExercises = 0;
    parts.forEach(part => {
      totalExercises += part.exercises;
    });
    return totalExercises;
  }

  const Header = (props) => {
    console.log(props)
    return(
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }

  const Content = (props) => {
      console.log(props)
      return(
        <div>
          <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
          <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
          <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
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
    const totalExercises = getTotalExercises(props.parts);
    return(
      <div>
        <h2>Total Number of Exercises:</h2>
        <p>{totalExercises}</p>
      </div>
    )
    }
  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App