import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers/anecdoteReducer'
import notifications from './reducers/notificationReducer'

const combinereducer = combineReducers({
  anecdotes: reducer,
  notification: notifications
})

const store = createStore(combinereducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))

export default store