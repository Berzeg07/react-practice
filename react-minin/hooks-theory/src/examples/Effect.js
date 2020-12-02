/* 
  - Достаем хук для работы с состоянием useState, useEffect 
  - useEffect отрабатывает при каждом рендере
*/
import React, { useState, useEffect } from 'react'

function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })

    // В данном случае useEffect отрабатывает при каждом рендере *
    // useEffect(() => {
    //   console.log('render')
    // })

    /* Чтобы useEffect отрабатывал только при изменении состояния
    в зависимости передаем состояние type */
    // useEffect(() => {
    //   console.log('Type change')
    // }, [type])

    /* useEffect удобно использовать для запроса к серверу 
    по изменению стейта type */

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('clean type')
        }
    }, [type])

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY,
        })
    }

    /* 
    useEffect можно задействовать аналогично функции componentDidMount,
    если передать в зависимости пустой массив, 
    при этом useEffect отработает только один раз
    */
    useEffect(() => {
        console.log('componentDidMount')

        window.addEventListener('mousemove', mouseMoveHandler)

        /* Очистка - удаление слушателя 
        (такая конструкция подходит для любой очистки 
        событий или отписок при удалении компонента)
        */
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }

    }, [])

    return (
        <div>
            <h1>Ресурс: {type}</h1>

            <button onClick={() => setType('users')}>Пользователи</button>
            <button onClick={() => setType('todo')}>Todo</button>
            <button onClick={() => setType('posts')}>Посты</button>

            {/* <pre> {JSON.stringify(data, null, 2)} </pre> */}

            <pre> {JSON.stringify(pos, null, 2)} </pre>
        </div>
    );
}

export default App;
