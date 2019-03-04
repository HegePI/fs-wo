import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'
import notifications from './reducers/anecdoteReducer'

const combinereducer = combineReducers({
  anecdotes: reducer,
  notification: notifications
})

const store = createStore(combinereducer)

console.log(store)

const render = () => {
  ReactDOM.render(
    <div></div>,
    //<App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)