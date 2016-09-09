import { combineReducers } from 'redux';

// mapping of the state
const rootReducer = combineReducers({
  state: (state = {}) => state
  books: booksReducer
});

export default rootReducer;
