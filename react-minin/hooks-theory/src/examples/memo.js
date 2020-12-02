/* 
  - Достаем хук для работы с состоянием useState, useEffect, useRef 
  - useEffect отрабатывает при каждом рендере
  - useRef похож на useState, но его изменение не вызывает 
  повторный рендер всего компонента, при этом сохраняет свое значение
  - useMemo кеширует значение, не вызывает свои функции при обновлении
   state если заданное в зависимости значение не изменилось
*/
import React, { useState, useEffect, useRef, useMemo } from 'react'

function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'brown' : 'black'
    }), [colored])

    // Кешируем значение, чтобы исключить вызов функции при новом рендере компонента * 
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        /* Данный вывод отработает при каждом рендере так как 
        при рендере объект styles создается заново и это фиксируется как измненение.
        Объект styles оже нужно кешировать через useMem */
        console.log('style change')
    }, [styles])

    return (
        <div>
            <h1 style={styles}>Высисляемое свойство: {computed}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
        </div>
    );
}

export default App;
