const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = (props) => {
  console.log('COURSE props =', props);
  const {course} = props
  return(
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
const Header = (props) => {
  const {name} = props
  return(
    <h1>{name}</h1>
  )
}
const Content = (props) => {
  console.log('CONTENT props =', props);
  const {parts} = props
  return(
    <div>
      {parts.map(part =>(
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
      ))}
    </div>
  )
}
const Part = (props) => {
  console.log('PART props =', props);
  const {name, exercises} = props
  return (
    <p>{name} : {exercises}</p>
  )
}
const Total = (props) => {
  console.log('TOTAL props =', props)
  const {parts} = props
  const totalExercises = parts.reduce((total,part) => total + part.exercises, 0)

  return(
    <div>
      <p>Total Exercises : {totalExercises}</p>
    </div>
  )
}
export default App