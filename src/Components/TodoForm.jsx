import React, { useState } from 'react';
import { useTodo } from '../Context/Todocontext';

function TodoForm() {
  const { addTodo } = useTodo();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todo, setTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status,setstatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !todo) return;
    addTodo({
      title,
      description,
      todo,
      dueDate,
      status,
      completed: false,
    });
    setTitle('');
    setDescription('');
    setTodo('');
    setDueDate('');
    setstatus('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded p-2 text-black"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded p-2 text-black"
      />
      <input
        type="text"
        placeholder="Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border rounded p-2 text-black"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border rounded p-2 text-black"
      />
       <select
        value={status}
        onChange={(e) => setstatus(e.target.value)}
        className="border rounded p-2 text-black"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      {/* <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      ></button> */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
