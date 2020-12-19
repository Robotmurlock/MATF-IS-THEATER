import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import generalReducer from './reducers/generalReducer';
import podaciReducer from './reducers/podaciReducer';

const store = createStore(
  combineReducers({
    general: generalReducer,
    podaci: podaciReducer,
  }),
  applyMiddleware(
    ReduxThunk
  )
)

window.store = store;

export default store;
