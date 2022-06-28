const ButtonDeleteAll = ({handleDeleteAll, task}) =>{
    if (task.length > 1){return <button className="btn-delete-all" onClick={handleDeleteAll}>Borrar todo</button>} 
}
export default ButtonDeleteAll