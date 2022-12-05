import { Idata } from "../types/data";
import {useState, useRef, useEffect} from "react";
import { ToDoList } from "./TodoList";

export const Form: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<Idata[]>([]);
    const inputRef= useRef<HTMLInputElement>(null);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if(inputRef.current) inputRef.current.focus();
        console.log(todos);
    }, [todos])

   

    const addToDo = () => {
       if(value) {
        setTodos([...todos, {
            id: Date.now(),
            value: value,
            isComplete: false,
            isEdit: false,
        }])
        setValue('');
       }
    }
    const editToDo = (index: number): void => {
       setTodos(todos.map(todo => {
            if(todo.id !== index) return todo;
            return {...todo,
                isEdit: true}
       }))
        
    }
    const showNotes = () => {
        setIsShown(!isShown)
    }
    const handleEvent: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }
    const removeToDo = (id: number): void => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleToDo = (id:number): void => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo;
            return {
                ...todo,
                isComplete: !todo.isComplete
            }
        }))
    } 

    return <div>
        <div>
            <input type="text" value={value} onChange={handleEvent} ref = {inputRef}  />
                <button onClick={addToDo}>Add</button>
                <button onClick={showNotes}>Show/Hide</button>
           { isShown? <ToDoList items={todos} removeToDo={removeToDo} 
            toggleToDo={toggleToDo}
            editToDo={editToDo}
            /> : ''}
        </div>
    </div>
}