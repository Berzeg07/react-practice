import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ActionsCard from './minishop/ActionsCard'
import StatusCard from './minishop/StatusCard'
import Context from './Context'

const App = () => {
    const [counter, setCounter] = useState(0)

    const count = (n) => setCounter(counter + n)

    const value = {
        counter,
        count
    }

    return (
        <Context.Provider value={value}>
            <StatusCard />
            <ActionsCard />
        </Context.Provider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)