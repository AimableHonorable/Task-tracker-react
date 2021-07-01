import {FaTimes} from 'react-icons/fa' //import delete icon from react icons to be used in this component

const Task = ({task, onDelete, onRemind}) => {
    return (
        // the division has a classname with conditions, if reminder is true we add reminder class, else do nothing
        <div className={`task  ${task.reminder ? 'reminder' : ''}`} onDoubleClick={onRemind}>
            <h3>{task.text} <FaTimes className="text-red" onClick={onDelete} ></FaTimes></h3> 
            <p>{task.day}</p>
        </div>
    )
}

export default Task
