
import './App.css'

// src/App.jsx

const App = () => {

  const tasks = [
    {task: 'eat', done: true},
    {task: 'pray', done: false},
    {task: 'play', done: true},
    {task: 'run', done: false},

  ]

  return (
    <>
    <h1>daily tasks:</h1>
    <ul>
      {tasks.map((item, index) => (
        <li key={index}>{item.done ? `Task completed - ${item.task}` : item.task}</li>
      ))}
    </ul>
    </>
  );
}

export default App