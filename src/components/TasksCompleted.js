import "../index.css"

const TasksCompleted = ({tasksCompleted,task}) => {
    return ( 
        <div className="tasks-completed-container">
            <p className="tasks-completed"><strong>Tareas <br/> completadas:</strong> <br/>{tasksCompleted}</p>
        </div>
    )
}

export default TasksCompleted;