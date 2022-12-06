import { Idata } from "../types/data";

interface ITodoItem extends Idata {
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
    editToDo: (index: number) => void;
    isEdit: boolean;
    changeInput: (e:React.ChangeEvent<HTMLInputElement>, index: number) => void;

    
}
    
export const ToDo: React.FC<ITodoItem> = ({id, value, isComplete,removeToDo,toggleToDo,editToDo,isEdit,changeInput}) => {

    return <div>
        { isEdit? <input value = {value} onChange = {(e) => changeInput(e,id) }/> : <span>{value}</span> }
        <button onClick={() => removeToDo(id)}>X</button>
        <button onClick={() => editToDo(id)}>edit</button>
    </div>
}

