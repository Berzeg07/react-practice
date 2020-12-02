/* 
  - Достаем хук для работы с состоянием useState, useEffect, useRef 
  - useEffect отрабатывает при каждом рендере
  - useRef похож на useState, но его изменение не вызывает 
  повторный рендер всего компонента, при этом сохраняет свое значение
*/
import React, { useState, useEffect, useRef } from 'react'

function App() {

    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        // Получаем кол-во рендеров компонента *
        renderCount.current++
        // Получаем ссылку на dom элемент *
        console.log(inputRef.current.value)
    })

    // Получаем предыдущее состояние инпута после рендера *
    useEffect(() => {
        prevValue.current = value
    }, [value])

    // Получем фокус на input при клике на кнопку *
    const focus = () => inputRef.current.focus()

    return (
        <div>
            <h1>Кол-во рендеров: {renderCount.current}</h1>
            <h2>Прошлое состояние инпута: {prevValue.current}</h2>

            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button className="btn btn-success" onClick={focus}>Фокус</button>
        </div>
    );
}

export default App;
