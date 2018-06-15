import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
let middleWares = [applyMiddleware(logger,thunk)]
let store = createStore(reducers,...middleWares)
export default store