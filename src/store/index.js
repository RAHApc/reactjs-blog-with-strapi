import { createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { getAllPost } from "../actions/posts";
import { reducers } from "../reducers";


export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )
)

store.dispatch(getAllPost())

store.subscribe(()=>console.log(store.getState()))