const App = (props) => {

  console.log(props)
  const course = 'Half Stack application development'

const sections = [
  {part1 : 'Fundamentals of React'},
  {part2 : 'Using props to pass data'},
  {part3 : 'State of a component'}
]
const exercises =[
  {exercise1 : 10},
  {exercise2 : 7},
  {exercise3 : 14}
]
  // const sections =[
  //   {part1 : 'Fundamentals of React', exercises1 : 10},
  //   {part2 : 'Using props to pass data', exercises2 : 7},
  //   {part3 : 'State of a component', exercises3 : 14}
  // ]
  const math = (10 + 7 + 14)
  // const math = (10 + 7 + 14)

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

          <h2>Course Name :</h2>
        <p>"{sections[0].part1}"</p>
          <h3>Number of Exercises : </h3>
        <p>{exercises[0].exercise1}</p>

        <h2>Course Name :</h2>
        <p>"{sections[1].part2}"</p>
          <h3>Number of Exercises : </h3>
        <p>{exercises[1].exercise2}</p>

        <h2>Course Name :</h2>
        <p>"{sections[2].part3}"</p>
          <h3>Number of Exercises : </h3>
        <p>{exercises[2].exercise3}</p>

        </div>
      )
    }
  const Total = (props) => {
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