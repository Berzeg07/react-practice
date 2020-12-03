import React, { useEffect, useState } from 'react'

// Работа с useReduce *
// import Main from './Main'
// import Alert from './alert/Alert'
// import { AlertProvider } from './alert/AlertContext'

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: { value, onChange },
    value, clear
  }
}

function App() {
  // const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')


  // const changeHandler = event => {
  //   setName(event.target.value)
  // }

  // const lastNameHandler = event => {
  //   setLastName(event.target.value)
  // }

  const input = useInput('')

  useLogger(input.value)

  return (
    <div className={'container pt-3'}>
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
      <input type="text" {...input.bind} />

      <button className="btn btn-warning" onClick={() => input.clear()}>Очистить</button>

      <h1>{input.value}</h1>

      {/* <input type="text" value={lastName} onChange={lastNameHandler} /> */}
      {/* <h1>{name} {lastName}</h1> */}
    </div>

    // Работа с useReduce *
    // <AlertProvider>
    //   <div className={'container pt-3'}>
    //     <Alert />
    //     <Main toggle={() => { }} />
    //   </div>
    // </AlertProvider>
  )
}

export default App;

