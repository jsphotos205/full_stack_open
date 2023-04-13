import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Button = (props) => {
  console.log('props value is ', props)
  const {handleClick, text} = props
  return(
  <button onClick={handleClick}>
    {text}
  </button>
  )
}
// const Button = ({handleClick, text}) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)

    const updatedLeft = left + 1

    setLeft(updatedLeft)
    console.log('left after', updatedLeft)

    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {

    setAll(allClicks.concat('R'))
    console.log('right before', right)

    const updatedRight = right + 1

    setRight(updatedRight)
    console.log('right after', updatedRight)

    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right'/>
      {/* <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button> */}
      {right}
      <History allClicks={allClicks} />
      debugger;
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}

// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

// const App = () => {

//   const [counter, setCounter] = useState(0)
//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {
//   console.log('increasing, value before', counter)
//   setCounter(counter + 1)
//   }

//   const decreaseByOne = () => {
//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {
//     console.log('resetting to zero', counter)
//     setCounter(0)
//   }

//   const [clicks, setClicks] = useState({
//     left : 0, right : 0
//   })

//   const [allClicks, setAll] = useState([])

//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     console.log('left click')
//     setAll(allClicks.concat('L'))
//     setClicks({...clicks, left: clicks.left + 1})
//     setTotal(allClicks)
//   }
//   //   const newClicks = {
//   //     ...clicks,
//   //     left : clicks.left + 1
//   //   }
//   //   // const newClicks = {
//   //   //   left: clicks.left + 1,
//   //   //   right : clicks.right
//   //   // }
//   //   setClicks(newClicks)
//   // }

//   const handleRightClick = () => {
//     console.log('right click')
//     setAll(allClicks.concat(('R')))
//     setClicks({...clicks, right: clicks.right + 1})
//     setTotal(allClicks)
//   }
//   //   const newClicks = {
//   //     ...clicks,
//   //     right : clicks.right + 1
//   //   }
//   //   // const newClicks = {
//   //   //   left: clicks.left,
//   //   //   right: clicks.right + 1
//   //   // }
//   //   setClicks(newClicks)
//   // }
//   // const [left, setLeft] = useState(0)
//   // const [right, setRight] = useState(0)

//   return(
//     <div>
//       <div>
//         {clicks.left}
//         <button onClick={handleLeftClick}>left</button>
//         <button onClick={handleRightClick}>right</button>
//         {clicks.right}
//         <p>{allClicks.join(' ')}</p>
//         <p>total {total}</p>
//       {/* {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right} */}
//       </div>
//       <Display counter={counter}/>
//       <Button handleClick={increaseByOne} text='plus'/>
//       <Button handleClick={setToZero} text='zero'/>
//       <Button handleClick={decreaseByOne} text='minus'/>

//     </div>
//   )
// }
export default App;
