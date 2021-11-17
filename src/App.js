import Header from './components/Header';
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, settasks] = useState([]);
  const [toggleAddForm, setToggleAddForm] = useState(false);

  useEffect (() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      settasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    return data;
  }

  //Fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    return data;
  }

  //Add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
      
    })
    const data = await res.json()
    settasks([...tasks, data]);
  };

  // Delete a task
  const DeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    settasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle completed
  const ToggleCompleted = async (id) => {
    const taskToToggle = await fetchTask(id);
    console.log(taskToToggle)
    const updTask = {...taskToToggle, completed : !taskToToggle.completed}

    const requestOptions = {
      method: 'PUT',
      headers
      : {'Content-type': 'application/json'},
      body: JSON.stringify(updTask)
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, requestOptions)
    const data = await res.json();
    console.log(data);

    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: data.completed } : task
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
