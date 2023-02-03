
import {
    GET_TODO, 
    ADD_TODO, 
    UPDATE_TODO, 
    DELETE_TODO } from "./redux.actionTypes";

const initialState = {
    todos : []
}

export const TodosReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case ADD_TODO : {
            return{
                ...state,
                todos : [...state.todos, payload],
            }
        }
        case DELETE_TODO : {
            const filterded = state.todos.filter((todos) => todos !== payload)
            return{
                ...state,
                todos : filterded,
            }
        }
        case GET_TODO : {
            return{
                ...state,
                todos : payload,
            }
        }
        case UPDATE_TODO : {
            return{

            }
        }
        default : {
            return state
        }
    }
}