import { GET_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./redux.actionTypes";

export const getTodo = () => ({
    type : GET_TODO, 
    payload : [
        {id : 1, isComplete : false, value : "item-1"},
        {id : 2, isComplete : true, value : "item-2"}
]});

export const addTodo = (value) => ({
    type : ADD_TODO,
    payload : [
        {id : Date.now(), isComplete : true, value },
        {id : Date.now(), isComplete : false, value },
]});

export const deleteTodo = (id) => ({
    type : DELETE_TODO,
    payload : id
});

export const updateTodo = (id, changes) => ({
    type : UPDATE_TODO,
    payload : [id, changes]
})





