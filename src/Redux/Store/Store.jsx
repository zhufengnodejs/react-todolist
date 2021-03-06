import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {todolistReducer} from '../Reducer/TodoListReducer'
import {dialogReducer} from '../Reducer/DialogReducer'
import thunk from 'redux-thunk'

var store = createStore(
    combineReducers({
        todolistReducer,
        dialogReducer
    }), 
    applyMiddleware(thunk)
    //compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;