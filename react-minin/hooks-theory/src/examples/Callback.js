/* 
  - Достаем хук для работы с состоянием useState, useEffect, useRef 
  - useEffect отрабатывает при каждом рендере
  - useRef похож на useState, но его изменение не вызывает 
  повторный рендер всего компонента, при этом сохраняет свое значение
  - useMemo кеширует значение, не вызывает свои функции при обновлении
   state если заданное в зависимости значение не изменилось
  - useCallback кеширует и возвращает самй функцию
*/
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import ItemsList from './ItemsList'

function App() {
    const [colored, setColored] = useState(false)
    const [count, setNumber] = useState(1)

    const styles = {
        color: colored ? 'brown' : 'black'
    }

    // Отличие от useMemo - useCallbak возвращает саму функцию, useMemo возвращает результат работы функции *
    const generateItemsFromApi = useCallback((num) => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + num}`)
    }, [count])

    // console.log(generateItemsFromApi)

    return (
        <div>
            <h1 style={styles}>Кол-во элементов: {count}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>

            <ItemsList getItems={generateItemsFromApi} />
        </div>
    );
}

export default App;
