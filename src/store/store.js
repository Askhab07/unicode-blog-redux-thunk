import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer } from "./reducer/categoriesReducer";
import { postReducer } from "./reducer/postsReducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    posts: postReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));