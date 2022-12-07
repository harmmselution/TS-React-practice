import React from "react";
import { Idata } from "../types/data";
import {ToDo} from "./ToDo";
interface ITodoListProps {
    items: Idata[];
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
    editToDo: (id: number) => void;
    changeInput: (e:React.ChangeEvent<HTMLInputElement>, index: number) => void;
    saveEdited: (index: number) => void;
}

export const ToDoList: React.FC<ITodoListProps> = ({items,toggleToDo,removeToDo,editToDo,changeInput,saveEdited}) => {

    return (<div>   
        {
            items.map((todo,index) =>  
            <ToDo {...todo} key={todo.id} 
                removeToDo={removeToDo} toggleToDo={toggleToDo}
                editToDo={editToDo}
                changeInput = {changeInput}
                saveEdited = {saveEdited}
            />)
        }
    </div>)
}