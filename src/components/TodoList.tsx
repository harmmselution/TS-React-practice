import React from "react";
import { Idata } from "../types/data";
import {ToDo} from "./ToDo";
interface ITodoListProps {
    items: Idata[];
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
}

export const ToDoList: React.FC<ITodoListProps> = ({items,toggleToDo,removeToDo}) => {

    return (<div>   
        {
            items.map(todo => <ToDo {...todo} key={todo.id} 
                removeToDo={removeToDo} toggleToDo={toggleToDo}
            />)
        }
    </div>)
}