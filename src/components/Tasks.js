import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggleCompleted }) => {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            onDelete={onDelete}
            onToggleCompleted={onToggleCompleted}
          />
        );
      })}
    </>
  );
};

export default Tasks;
