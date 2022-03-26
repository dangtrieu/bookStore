import { createStore, compose, applyMiddleware } from 'redux'
import reduce from './Reduce'


const asyncMiddleware = store => next => action => {
    if (typeof action === 'function') {
        return action(next)
    }
    return next(action)
}


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    reduce,
    composeEnhancers(applyMiddleware(asyncMiddleware))
);
export default store