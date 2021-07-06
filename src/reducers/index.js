import { combineReducers } from "redux";
import { postReducer } from './posts';

export const reducers = combineReducers({
    posts: postReducer
})