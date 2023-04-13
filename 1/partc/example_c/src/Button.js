import { useState } from "react";
// example of event handler being defined in seperate place:
// const App1 = (props) => {
//   const Button = (props) => (
//     <button onClick={props.handleClick}>
//       {props.text}
//     </button>
//   )
//   return(
//     <div>
//       <Button handleClick={() => setToValue(1000) text='thousand'} />
//     </div>
//   )
// }
const Button = () => {

    const [value, setValue] = useState(10)
// place the call for the function in the button section below with this way of writing just a prference.
    // const setToValue = (newValue) => {
    //   console.log('value now', newValue)
    //   setValue(newValue)
    // }
// example of defining event handlers that set the state of the component to a given value:
// notice you put the function call in the const part and not the button part below
// I think i prefer this way
    const setToValue = (newValue) => () => {
      console.log('value now', newValue) //print the new value to console
      setValue(newValue)
    }

    const hello = (who) => () => {
          console.log('hello', who)
        }
      
    return (
      <div>
        {value}

        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(0)}>reset</button>
        <button onClick={setToValue(value + 1)}>increment</button>

        <button onClick={hello('react')}>react</button>
        <button onClick={hello('function')}>function</button>

      </div>
    )
  }
  export default Button;