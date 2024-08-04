import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodos } from "../features/todoSlice";


export default function AddForm() {
    const [ task , setTask ] = useState("");
    const dispatch = useDispatch();

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newVal = event.target.value;
    
        setTask(newVal);
    }

    let handleSubmit = (event) => {
            event.preventDefault();
            console.log(task);
            dispatch(addTodos(task));
            setTask("");
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <input placeholder = "add task"
        type="text"
        onChange={handleInputChange}
        > 
        </input>
        &nbsp; &nbsp;
        <button> Add Task </button>
        </form>
        </>
    )
}