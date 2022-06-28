import ButtonEdit from "./ButtonEdit"
import { useState } from "react";
import "../index.css"

const Task = ({task, handleCheck, handleDeleteTask, setTask, tasks}) => {

    const [modoEdit, setModoEdit] = useState(false);
    const [newEdit, setNewEdit] = useState("");

    const handleChangeEdit = (e) => {
        setNewEdit(e.target.value)
    }

    const handleEditSubmit =  (e) => {
        e.preventDefault()
        setTask([...tasks, task.task = newEdit]);
        setNewEdit("")
        setModoEdit(false);

    }


    return  <>
                    {
                        modoEdit === false ?
                        <li className={task.completed ? "tasks-li done" : "tasks-li"} key={task.id} >
                            <div className="input-check-container">
                                <input className="checkbox" type="checkbox" checked= {task.completed} onChange={() => handleCheck(task.id)} /> 
                                <p className="tasks-li__task">{ task.task }</p>
                                </div>
                            <div>
                                <ButtonEdit modoEdit = {modoEdit} setModoEdit = {setModoEdit} />
                                <button className="btn-delete" onClick={() => handleDeleteTask(task.id)} ><strong>X</strong></button>
                            </div>
                        </li>
                        :
                        <form id="form-edit" onSubmit={handleEditSubmit}>
                            <input className="input-edit" type="text" onChange={handleChangeEdit} value = {newEdit} autoFocus></input>
                            <button className="btn-save" type="submit">Guardar</button>
                        </form>
                    }
                    
                </>
}

export default Task