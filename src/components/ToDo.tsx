import { Idata } from "../types/data";

interface ITodoItem extends Idata {
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
    editToDo: (index: number) => void;
    isEdit: boolean;
}

export const ToDo: React.FC<ITodoItem> = ({id, value, isComplete,removeToDo,toggleToDo,editToDo,isEdit}) => {
  
    return <div>
        { isEdit? <input value = {value} /> : <span>{value}</span> }
        <button onClick={() => removeToDo(id)}>X</button>
        <button onClick={() => editToDo(id)}>edit</button>
    </div>
}

