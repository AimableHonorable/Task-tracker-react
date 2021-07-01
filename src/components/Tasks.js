import Task from "./Task"

const Tasks = ({tasks, onDelete, onRemind}) => {
    
    return (
        <div>
            {tasks.map((task) => (
                <Task 
                key={task.id} 
                task={task} 
                onDelete={() => onDelete(task.id)} 
                onRemind={() => onRemind(task.id)}/>
            ))}
        </div>
    )
}

export default Tasks
