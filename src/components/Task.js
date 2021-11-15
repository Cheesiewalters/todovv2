import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggleCompleted }) => {
  return (
    <div
      className={
        task.sarah && task.conor
          ? `task-both ${task.completed ? 'complete ' : ''} `
          : task.sarah
          ? `task-sarah ${task.completed ? 'complete ' : ''}`
          : `task-conor ${task.completed ? 'complete ' : ''}`
      }
      onDoubleClick={() => onToggleCompleted(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
