import {legacy_createStore, compose, combineReducers} from "redux";
import { TodosReducer } from "./todo.reducer";

const rootReducer = combineReducers(TodosReducer)

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
export const store = legacy_createStore(rootReducer, composeEnhancer);