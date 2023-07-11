import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = () => {
    console.log(task, deadline);
  };
  
  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Enter task...'
            name='task'
            onChange={handleChange}
          />
          <input
            type='number'
            placeholder='Enter deadline'
            name='deadline'
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Todo</button>
      </div>
      <div className='todoList'></div>
    </div>
  );
};

export default App;
