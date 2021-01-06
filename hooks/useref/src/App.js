import React, { useEffect, useState } from 'react'

function App() {

  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5])
  const ulRef = React.useRef()

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1]
    setNumbers([...numbers, lastNumber + 1])
  }

  const handleScroll = () => {
    console.log('Был скролл')
  }

  /* 
    Такая конструкция вызовет ошибку при изменении стейта,
    так как useEffect аналог работы didMount - вызывается один раз при первом рендере 
  */
  // let ulElem

  // React.useEffect(() => {
  //   ulElem = document.querySelector('ul')
  //   ulElem.addEventListener('scroll', handleScroll)
  // }, [])

  // const removeScroll = () => {
  //   ulElem.removeEventListener('scroll', handleScroll)
  // }

  /* Конце контрукции с ошибкой ========================= */

  React.useEffect(() => {
    // console.log(ulRef)
    ulRef.current.addEventListener('scroll', handleScroll)
  }, [])

  const removeScroll = () => {
    console.log(ulRef)
    ulRef.current.removeEventListener('scroll', handleScroll)
  }

  return (
    <div>
      <ul ref={ulRef} style={{ height: '50px', overflow: 'hidden', overflowY: 'auto' }}>
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Добавить число</button>
      <button onClick={removeScroll}>Не следить</button>
    </div>
  );
}

export default App;

/*
Первый сценарий: при клике на первую кнопку счетчик counter в useRef будет увеличиваться,
но надпись внутри кнопки будет равна 0, так как useRef не вызывает перерендер
компонента
*/
// function App() {
//   const [counter, setCounter] = useState(0)

//   const ref = useRef()
//   useEffect(() => {
//     ref.current = {
//       counter: 0,
//     }
//   }, []);

//   return (
//     <div>
//       <button onClick={() => ref.current.counter++}>
//         На меня нажали {counter} раз
//       </button>
//       <br />
//       <button onClick={() => setCounter(ref.current.counter)}>Обновить</button>
//     </div>
//   )
// }

// Отслеживаем событие в дом элементе инпута, при клике клавищи enter в первом инпуте осуществляем событие focus на втором инпуте  
function App() {
  const [name, setName] = useState('')
  const [surname, setSurName] = useState('')

  const nameInputRef = useRef()
  const surnameInputRef = useRef()

  const handlerKeyUp = (e) => {
    if (e.key === 'Enter') {
      surnameInputRef.current.focus()
    }
  }

  return (
    <form>
      <input
        ref={nameInputRef}
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={handlerKeyUp}
      />
      <br />
      <input
        ref={surnameInputRef}
        type="text"
        placeholder="Фамилия"
        value={surname}
        onChange={(e) => setSurName(e.target.value)}
      />
    </form>
  )
}
