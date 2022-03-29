import { createStore, compose, applyMiddleware } from 'redux'
import RootReducer from './RootReduce'
import thunk from 'redux-thunk'


// const asyncMiddleware = store => next => action => {
//     if (typeof action === 'function') {
//         return action(next)
//     }
//     return next(action)
// }


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default store