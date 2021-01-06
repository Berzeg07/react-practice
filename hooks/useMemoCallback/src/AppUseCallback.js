import React, { useEffect } from 'react';

function App() {
    const [message, setMessage] = React.useState('Hello world')
    const [counter, setCounter] = React.useState(0)

    const greeting = React.useCallback((text) => {
        console.log(text)
    }, [])

    useEffect(() => {
        greeting(message)
    }, [greeting, message]);

    return (
        <button onClick={() => setCounter(counter + 1)}>
            Клик {counter}
        </button>
    )
}

export default App

