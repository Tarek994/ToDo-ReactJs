import { Button, TextField } from "@material-ui/core";
import React,{useState} from "react";
const { v4: uuidv4 } = require('uuid');
function TodoForm ({addTodo}){
const [todo, setTodo] = useState({
    id : "",
    task: "",
    completed: false,
    });

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if (todo.task.trim()){
            addTodo({...todo, id: uuidv4() });
            // reset task input
            setTodo ({...todo, task: ""});
        }
    }


    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
            label="Task"
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <Button type="submit">submit</Button>
        </form>
    )
}

export default TodoForm ;