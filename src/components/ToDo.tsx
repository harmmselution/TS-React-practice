import { Idata } from "../types/data";

interface ITodoItem extends Idata {
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
}
export const ToDo: React.FC<ITodoItem> = ({id, value, isComplete,removeToDo,toggleToDo}) => {
  
    return <div>
    <input type="checkbox" checked = {isComplete} onChange={() => toggleToDo(id)} />
        {value}
        <button onClick={() => removeToDo(id)}>X</button>
    </div>
}