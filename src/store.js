import { createStore, combineReducers } from 'redux';
// import reducer1 from './reducers/reducer1';
// import reducer2 from './reducers/reducer2';
import reducer from './Reducers/reducer';
const rootReducer = combineReducers({
  reducer,
  // reducer2
});

const store = createStore(rootReducer);
export default store ;