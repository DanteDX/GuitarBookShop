import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import guitarsReducer from './guitarsReducer';

export default combineReducers({
    booksReducer,
    guitarsReducer
});
