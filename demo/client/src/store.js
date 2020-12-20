import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import generalReducer from './reducers/generalReducer';
import podaciReducer from './reducers/podaciReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    general: generalReducer,
    podaci: podaciReducer,
  }),
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  )
)

window.store = store;

export default store;
