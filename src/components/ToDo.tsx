import { Idata } from "../types/data";

interface ITodoItem extends Idata {

}
export const ToDo: React.FC<ITodoItem> = ({id, value, isComplete}) => {
  
    return <>
    <input type="checkbox" checked = {isComplete}  />
        {value}
        <button>X</button>
    </>
}