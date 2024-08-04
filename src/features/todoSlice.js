import { createSlice , nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : [{
        id : 123,
        task : "demo-task",
        isDone : false,
    }],
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodos : (state , action) => {
            const newTodo = {
                id : nanoid(),
                task : action.payload,
                isDone : false
            }
            state.todos.push (newTodo); //direct mutation 
        },

        deleteTodos : (state , action) => {
                // action.payload
              state.todos = state.todos.filter((todo) => todo.id != action.payload )
        },
        markAsDone : (state , action ) => {
            //action.payload
            state.todos.map((todo) => {
                if(todo.id === action.payload) {
                    todo.isDone = true;
                }
            });
        },
    },
});

export const {addTodos , deleteTodos , markAsDone } = todoSlice.actions;
export default todoSlice.reducer;