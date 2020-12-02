// Достаем хук для работы с состоянием useState *
import React, { useState } from 'react'

// Вычисляемое свойство *
function randomNum() {
    return Math.trunc(Math.random() * 20)
}

function App() {
    /* В useState задаем начальное состояние 0. Выполняем деструктуризацию 
    массива, в первом элементе получаем состояние, во втором получаем функцию, которая 
    отвечает за изменение состояния и перерисовку в рендере 
    (useState всегда возвращает два элемента в массиве) */

    /* const [counter, setCounter] = useState(0) */

    /* 
      Если требуется доставить вычисляемое свойство, 
      задаем коллбэк в useState 
    */
    const [counter, setCounter] = useState(() => {
        return randomNum()
    })

    /* UseState в работе с объектами */
    const [state, setState] = useState({
        title: 'Счетчик тест',
        date: Date.now()
    })

    /* Важно! ***
    - useState нельзя вызывать внутри условия if 
    - setCounter работает асинхронно 
    */

    // Функции для изменения состояния *
    function increment() {
        // Если требуется один раз вызвать функцию (bad practice) *
        // setCounter(counter + 1)

        /*
        Если требуется дважды вызвать функцию, с учетом асинхронности 
        вызываем setCounter два раза с коллбэком 
        (prevCounter принимает предыдущее значение, best practice):
        */
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
        // setCounter(prev => prev + 1)

    }

    function decrement() {
        setCounter(counter - 1)
    }

    /* Смена state в объекте важно делать через коллбэк, 
    иначе заменится весь объект */
    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'Новое название'
            }
        })
    }

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">Добавить</button>
            <button onClick={decrement} className="btn btn-danger">Убрать</button>

            {/* Кнопка для изменения setState объекта */}
            <button onClick={updateTitle} className="btn btn-default">Изменить title</button>

            {/* Вывод объекта из setState  */}
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
