import { Idata } from "../types/data";
import {useState, useRef, useEffect} from "react";
import { ToDoList } from "./TodoList";

export const Form: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<Idata[]>([]);
    const addToDo = () => {
       if(value) {
        setTodos([...todos, {
            id: Date.now(),
            value: value,
            isComplete: false
        }])
        setValue('');
       }
    }
    return <>
        <div >
           
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                <button onClick={addToDo}>Add</button>
            <ToDoList items={todos}/>
        </div>
    </>
}