import React from "react";
import { Idata } from "../types/data";
import {ToDo} from "./ToDo";
interface ITodoListProps {
    items: Idata[];

}

export const ToDoList: React.FC<ITodoListProps> = ({items}) => {

    return (<div>
        {
            items.map(todo => <ToDo {...todo} key={todo.id}/>)
        }
    </div>)
}