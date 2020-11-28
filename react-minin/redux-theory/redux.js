const redux = require('redux')

const initialState = {
    counter: 0
}

// Reducer (в action передается тип действия type: action-type) *
const reducer = (state = initialState, action) => {

    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + action.value
        }
    }

    return state
}

// Store *
const store = redux.createStore(reducer)
console.log(store.getState()) // {counter: 0}

store.subscribe(() => {
    console.log('Subscribe', store.getState())
})

// Subscribe {counter: 1}
// Subscribe {counter: 11}

// Actions *
const addCounter = {
    type: 'ADD'
}

// Обновляем state через метод dispatch *
store.dispatch(addCounter)
console.log(store.getState()) // {counter: 1}

// Передача кастомных значений *
store.dispatch({ type: 'ADD_NUMBER', value: 10 })
console.log(store.getState()) // {counter: 11}