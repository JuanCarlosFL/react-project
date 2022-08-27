import './App.css'
import TaskListComponent from './components/container/task_list'
import ContactComponent from './components/container/contact'

function App() {

  return (
    <div className="App">
      <ContactComponent></ContactComponent>
      <TaskListComponent></TaskListComponent>
    </div>
  )
}

export default App
