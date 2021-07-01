import { useState } from "react"
// usestate is used to use our data in other components
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors appointment',
            day: 'Feb 5th at 2:30PM',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:30PM',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food shopping',
            day: 'Feb 5th at 2:30PM',
            reminder: false,
        }
    
    ]
)
// delete task function
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id)) //to remove any task that's clicked at a time
}
//toggle reminder function
const taskReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    )
  )
}
  return (
    <div className="App">
      <Header /> 
      {/* show tasks only when available. otherwise don't show anything but a message */}
      {
        tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} onRemind={taskReminder} /> 
        : 
          'No Tasks Available'
      }
      
    </div>
  );
}

export default App;
