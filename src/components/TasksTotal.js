const TasksTotal = ({taskTotal}) => {
    return  <div className="tasks-total-container">
                <p className="tasks-total"><strong>Tareas <br/>totales:</strong> <br/> {taskTotal}</p>
            </div>
}

export default TasksTotal;