import { createSlice } from '@reduxjs/toolkit'

let id = 1
const getNextId = () => id++

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: getNextId(), label: 'Laundry', complete: true },
            { id: getNextId(), label: 'Groceries', complete: false },
            { id: getNextId(), label: 'Dishes', complete: false },
        ],
        showCompletedTodos: false,
    },
    reducers: {
        createNewTodo: {
            prepare(label, complete) {
                return { payload: { id: getNextId(), label, complete }}
            },
            reducer(state, action) {
                state.todos.push
            }
        },
        toggleTodo: (state, action) => {
            let todo = state.todos.find(td => td.id === action.payload)
            todo.complete = !todo.complete
        },
        toggleShowCompletedTodos: state => {
            state.showCompletedTodos = !state.showCompletedTodos
        },
    }
})

export const {
    createNewTodo,
    toggleTodo,
    toggleShowCompletedTodos,
} = todosSlice.actions

export default todosSlice.reducer