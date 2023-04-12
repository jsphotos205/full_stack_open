const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age

    return(
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const App = () => {
    const name = 'John'
    const age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name='Eleanor' age={29+2}/>
            <Hello name={name} age={age}/>
        </div>
    )
}