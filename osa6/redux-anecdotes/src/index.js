import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'
import notifications from './reducers/notificationReducer'

const combinereducer = combineReducers({
  anecdotes: reducer,
  notification: notifications
})

const store = createStore(combinereducer)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/*const render = () => {
  ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)*/