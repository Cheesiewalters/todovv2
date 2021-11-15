import Header from './components/Header';
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, settasks] = useState([]);
  const [toggleAddForm, setToggleAddForm] = useState(false);

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    settasks([...tasks, newTask]);
  };

  // Delete a task
  const DeleteTask = (id) => {
    settasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle completed
  const ToggleCompleted = (id) => {
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const ToggleAddForm = () => {
    setToggleAddForm(!toggleAddForm);
  };

  return (
    <div className='container'>
      <Header onToggleAddForm={ToggleAddForm} toggleAddState={toggleAddForm} />
      {toggleAddForm ? (
        <AddTask onAdd={addTask} onToggleAddForm={ToggleAddForm} />
      ) : (
        <></>
      )}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={DeleteTask}
          onToggleCompleted={ToggleCompleted}
        />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
