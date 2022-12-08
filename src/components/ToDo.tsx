import { Idata } from "../types/data";

interface ITodoItem extends Idata {
    removeToDo: (id: number) => void;
    editToDo: (index: number) => void;
    isEdit: boolean;
    changeInput: (e:React.ChangeEvent<HTMLInputElement>, index: number) => void;
    saveEdited: (index: number) => void;
    hasTag: boolean;
    
}
    
export const ToDo: React.FC<ITodoItem> = ({id, value, isComplete,removeToDo,editToDo,isEdit,changeInput,saveEdited}) => {

    return<div>
        { isEdit? <input value = {value} onChange = {(e) => changeInput(e,id) }/> : <input type="text" value={value} /> }
        <button onClick={() => removeToDo(id)}>X</button>
        <button onClick={() => editToDo(id)}>edit</button>
        <button onClick={() => saveEdited(id)}>save edited</button>
    </div>
}

