import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

// mapping of the state
const rootReducer = combineReducers({
  // state: (state = {}) => state; // this came by default code -- not in video?
  // adds a key to the application called books, with a value of the books array
  books: BooksReducer
});

export default rootReducer;
