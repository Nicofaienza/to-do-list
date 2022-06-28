
const ButtonEdit = ({modoEdit, setModoEdit}) => {
    
    

    const handleEdit = () => {
        setModoEdit(true);
        console.log("modo edit: ", modoEdit)
    }
    
    
    return <button className="btn-edit" onClick={handleEdit} > Edit </button>

}

export default ButtonEdit;