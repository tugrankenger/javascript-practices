import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([{taskName:"test1",deadline:1}]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = () => {
    console.log(task, deadline);
    const newTask = {taskName:task, deadline:deadline}
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
    console.log("tasks: ", todoList)
  };

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Enter task...'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <input
            type='number'
            placeholder='Enter deadline'
            name='deadline'
            value={deadline}
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
