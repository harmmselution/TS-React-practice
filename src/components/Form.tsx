import { Idata } from "../types/data";
import {useState} from "react";
import { ToDoList } from "./TodoList";
import { Tag } from "./Tag";
export const Form: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<Idata[]>([]);
    const [filtered, setFiltered] = useState(todos);
    const [isShown, setIsShown] = useState(false);
    const [filterFlag, setFilterFlag] = useState(false);
   const changeInput = (e:React.ChangeEvent<HTMLInputElement>, index: number) => {
        setTodos(todos.map(todo => {
            if(todo.id !== index) return todo;
            return {...todo,value: e.target.value}
        }))
   }
   
    const addToDo = () => {
       if(value) {
        setTodos([...todos, {
            id: Date.now(),
            value: value,
            isComplete: false,
            isEdit: false,
            hasTag: false,
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
       todos.forEach( (todo) => {
            if(todo.id === index && todo.value.includes("#")) {
            //    let arr = todo.value.split(" ");
            //    arr.forEach( elem => {
            //     if(elem.startsWith("#")) {
                    
            //     }
            //    })
            let inputs = document.getElementsByTagName("input");
              let arr =  Array.from(inputs);
             let newarr= arr.map(elem => elem.value)
            console.log(newarr)
            }    
           
       })
    }

    const showNotes = () => {
        setIsShown(!isShown)
    }

    const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const removeToDo = (id: number): void => {
        setTodos(todos.filter((todo) => todo.id !== id));

    }

    const saveEdited = (index: number): void => {
        setTodos(todos.map(todo => {
            if(todo.id !== index ) return todo;
            return {...todo,isEdit:false};
        }))
    }

    let tags: string[]= [];

    todos.map(tag => {
        let newtags = tag.value.split(" ");
        newtags.forEach(elem => {
            if(elem.startsWith("#") && elem.length > 1 ) {
              tags.push(elem);
            }
        })     
            return tags;
        })


        let newTodos = [];
        
       const handleClick = (tag: string) => {
         newTodos = todos.filter(item => item.value.split(" ").includes(tag))
        setFiltered(newTodos);
        setFilterFlag(true);    
       }
       
      
    return <div className="list">
        <div>
            <input type="text" value={value} onChange={handleEvent}    />
                <button onClick={addToDo}>Add</button>
                <button onClick={showNotes}>Show/Hide</button>
           { isShown ? <ToDoList items={todos} removeToDo={removeToDo} 
            editToDo={editToDo}
            changeInput={changeInput}
            saveEdited = {saveEdited}
            filtered = {filtered}
            filterFlag = {filterFlag}
            /> : "" }    
        </div>
        <h2>список тегов:</h2>
        <ul>
        {tags.map((tag,index) => <Tag tag={tag} key={`${tag}+${Date.now()}`} id={index} handleClick={() => handleClick(tag)}/>)}
        <button onClick={() => setFilterFlag(false)}>сбросить фильтр</button> 
        </ul>
    </div>


}