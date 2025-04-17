import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./todo";


interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [
        {
            id: '0',
            completed: false,
            title: "Learn something"
        },
        {
            id: '1',
            completed: true,
            title: "Try to do another thing"
        },
        {
            id: '2',
            completed: true,
            title: "Are you done"
        },
    ],


};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload);
            state.todos[index] = {
                ...state.todos[index],
                completed: !state.todos[index].completed
            }
        }
    }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
