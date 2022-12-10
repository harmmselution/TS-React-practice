import React from "react";
import { Idata } from "../types/data";
import {ToDo} from "./ToDo";

interface ITodoListProps {
    items: Idata[];
    removeToDo: (id: number) => void;
    editToDo: (id: number) => void;
    changeInput: (e:React.ChangeEvent<HTMLInputElement>, index: number) => void;
    saveEdited: (index: number) => void;
    filtered: Idata[];
    filterFlag: boolean;
}

export const ToDoList: React.FC<ITodoListProps> = ({items,removeToDo,editToDo,changeInput,saveEdited,filtered,filterFlag}) => {
    
    return (<div >   
        {
           filterFlag?  filtered.map((todo,index) =>  
            <ToDo {...todo} key={todo.id} 
                removeToDo={removeToDo} 
                editToDo={editToDo}
                changeInput = {changeInput}
                saveEdited = {saveEdited}
            />) :  items.map((todo,index) =>  
            <ToDo {...todo} key={todo.id} 
                removeToDo={removeToDo} 
                editToDo={editToDo}
                changeInput = {changeInput}
                saveEdited = {saveEdited}
            />)
        }
                

    </div>
    )
}