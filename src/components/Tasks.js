import "../index.css"
import Task from "./Task";

const Tasks = ({tasks, handleDeleteTask, handleCheck, setTask}) => {



    if(tasks.length === 0){
        return "No hay tareas"
    }
    return tasks
            .filter(task => task.task)
            .map(task => <Task tasks = {tasks} setTask = {setTask} task = {task} handleCheck = {handleCheck} handleDeleteTask = {handleDeleteTask} />)
}            


    
 
   

export default Tasks;