import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [{
    id : 1,
    name : 'John Sloan',
    important : true,
}]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)
