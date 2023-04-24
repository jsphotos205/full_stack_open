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
    console.log('HEADER props =', props)
    const {name} = props
    return(
      <div>
      <h1>{name}</h1>
      </div>
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
        <p><b>Total Exercises : {totalExercises}</b></p>
      </div>
    )
  }

  export {Course};