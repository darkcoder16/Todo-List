import { useSelector } from "react-redux";
import AddForm from "./addForm";
import { deleteTodos, markAsDone } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Todo() {
    const [ task , setTask ] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    console.log(todos);
    
    let handleDelete = (id) => {
        console.log("delete" , id);
        dispatch(deleteTodos(id))
    }

    let handleMark= (id) => {
        dispatch(markAsDone(id))
    }

    return (
        <>
            <h1> Todo App </h1>
            <AddForm/> 
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}> 
                     <span style={ todo.isDone ? {textDecorationLine : "line-through" , color : "red"} : {} }> {todo.task }</span>
                    &nbsp; &nbsp;
                    <button onClick={()=> handleMark(todo.id)}> mark as done </button>
                    &nbsp; &nbsp;
                    <button onClick={() => handleDelete(todo.id)}> delete Task </button> </li>)
                )}
            </ul>
        </>
    )
}