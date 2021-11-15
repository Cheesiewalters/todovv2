import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggleCompleted }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
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
