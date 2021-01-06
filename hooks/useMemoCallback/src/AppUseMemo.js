import React from 'react';

function createUser(name, surname) {
  return { name, surname }
}

function App() {
  const [name, setName] = React.useState('')
  const [surname, setSurname] = React.useState('')
  const [counter, setCounter] = React.useState(0)

  const user = React.useMemo(() => createUser(name, surname), [
    name,
    surname
  ])

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        На меня нажали {counter} раз
      </button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      ></input>
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default App
