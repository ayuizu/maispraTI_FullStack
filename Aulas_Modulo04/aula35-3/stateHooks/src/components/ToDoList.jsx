import { useState } from "react";

function ToDoList(){
    //Inicializa lista vazia + função para altera-la
    const [toDos, setToDos] = useState([])
    const [task, setTask] = useState('')

    const addToDo = () => {
        setToDos([...toDos, task])
        //Desestrutura/preserva todos os elementos e adiciona a ultima
        setTask('')
        //Limpa o campo
    }

    const rmvToDo = (index) =>{
        const newToDos = toDos.filter((_, i) => i !== index)
        setToDos(newToDos)
    }

    return(
        <div>
            <input type="text" value={task} placeholder="Digite uma tarefa" onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addToDo}>Add Task</button>
            
            <div>
            <h3>To Do List</h3>
                <ul id="toDo">
                    {toDos.map((toDo, index)=>(
                        // Map - mapeia elemento por elemento aplicando a modificação
                        <li key={index}>{toDo} <button id='rmvBtn' onClick={()=>rmvToDo(index)}>X</button></li>
                    ))}
                </ul>
            </div>
        
        </div>
    )
}

export default ToDoList