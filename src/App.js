import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import ButtonDeleteAll from "./components/ButtonDeleteAll";
import TasksCompleted from "./components/TasksCompleted";
import TasksTotal from "./components/TasksTotal";



function App({tasks}) {

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [tasksCompleted, setTaskCompleted] = useState(0);
  const [taskTotal, setTaskTotal] = useState(0);


  useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem('task'));
		if (tasks) {
			setTask(tasks);
		}
	}, []);

  console.log("task", task)


  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newObject = {id: new Date() + Math.random(), task: newTask, completed: false}
    
    if (newTask !== ""){
      setTask([...task, newObject])
    }

    if (newTask)
    
    setNewTask("")
  }

  const handleDeleteTask = (id) => {
    setTask(task => task.filter(task => task.id !== id))
  }

  const handleCheck = (id) => {
    setTask(task.map((task) =>{
      return task.id === id ? {...task, completed: !task.completed} : {...task}
     }))
     console.log(task)
  }
  
  const handleDeleteAll = () =>{
    setTask([])
  }

  useEffect(() => {
    let count = 0;
    task.map(task => {
      if(task.task){
        count ++;
      }return count;
    })
    setTaskTotal(count)
  }, [task])

  useEffect(() => {
    let count = 0;
    task.map(task => {
      if (task.completed){
        count ++;
      }return count;
    })
    setTaskCompleted(count)
  }, [task])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
  }, [task])

  return (
    <>
      <form id = "form" onSubmit={handleSubmit}>
        <input id="input" placeholder="Agregar tarea" onChange={handleChange} value = {newTask} autoFocus ></input>
        <button className="btn" type="submit">ADD</button>
      </form>

      <div className="tasks-total-completed">
        <TasksCompleted tasksCompleted={tasksCompleted} task={task} /> 
        <TasksTotal taskTotal={taskTotal}/>
      </div>

      <div id="tasks-container">
        <h2 id="title">Tareas por hacer: </h2>
        <ul id="tasks-list">
          <Tasks tasks = {task} setTask = {setTask} handleDeleteTask = {handleDeleteTask} handleCheck = {handleCheck} />
        </ul>
      </div>

      <ButtonDeleteAll handleDeleteAll = {handleDeleteAll} task = {task}/>
    </>
  );
}

export default App;
