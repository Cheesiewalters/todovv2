import { useState } from 'react';

const AddTask = ({ onAdd, onToggleAddForm }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [completed, setCompleted] = useState(false);
  const [sarah, setSarah] = useState(false);
  const [conor, setConor] = useState(false);

  const [showTaskError, setTaskError] = useState(false);
  const [showSCError, setSCError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setTaskError(true);
      setSCError(false);
      return;
    } else if (!sarah && !conor) {
      setTaskError(false);
      setSCError(true);
      return;
    }

    onAdd({ text, day, completed, sarah, conor });
    setText('');
    setDay('');
    setCompleted(false);
    setSarah(false);
    setConor(false);
    setTaskError(false);
    setSCError(false);
    onToggleAddForm();
  };

  const onReset = () => {
    onToggleAddForm();
  };

  return (
    <form className='add-form' onSubmit={onSubmit} onReset={onReset}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className='form-control'>
        <label>Day</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <div className='form-control-check'>
        <label>Set Completed</label>
        <input
          type='checkbox'
          checked={completed}
          value={completed}
          onChange={(e) => setCompleted(e.currentTarget.checked)}
        ></input>
      </div>
      <div className='form-control-check'>
        <label>Is this task for sarah?</label>
        <input
          type='checkbox'
          value={sarah}
          checked={sarah}
          onChange={(e) => setSarah(e.currentTarget.checked)}
        ></input>
      </div>
      <div className='form-control-check'>
        <label>Is this task for conor?</label>
        <input
          type='checkbox'
          value={conor}
          checked={conor}
          onChange={(e) => setConor(e.currentTarget.checked)}
        ></input>
      </div>
      {showTaskError ? (
        <div className='add-form-task-error'>
          Please enter a task before saving
        </div>
      ) : (
        <></>
      )}
      {showSCError ? (
        <div className='add-form-task-error'>
          Please select if this task is for conor or sarah before saving
        </div>
      ) : (
        <></>
      )}

      <input type='submit' className='btn btn-block' value='Save Task'></input>
      <input
        type='reset'
        className='btn btn-block'
        style={{ backgroundColor: 'red' }}
        value='Cancel'
      ></input>
    </form>
  );
};

export default AddTask;
