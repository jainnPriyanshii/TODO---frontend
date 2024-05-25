import React, { useState } from 'react';
import { useTodo } from '../Context/Todocontext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoTitle, setTodoTitle] = useState(todo.title);
    const [todoDescription, setTodoDescription] = useState(todo.description);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [todoDueDate, setTodoDueDate] = useState(todo.dueDate);
    const [todostatus, setTodostatus] = useState(todo.status);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {
            ...todo,
            title: todoTitle,
            description: todoDescription,
            todo: todoMsg,
            dueDate: todoDueDate,
            status: todostatus,
        });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex flex-col border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
                    } ${todo.completed ? 'line-through' : ''}`}
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                readOnly={!isTodoEditable}
                placeholder="Title"
            />
            <textarea
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
                    } ${todo.completed ? 'line-through' : ''}`}
                value={todoDescription}
                onChange={(e) => setTodoDescription(e.target.value)}
                readOnly={!isTodoEditable}
                placeholder="Description"
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
                    } ${todo.completed ? 'line-through' : ''}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                placeholder="Task"
            />
            <input
                type="date"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
                    } ${todo.completed ? 'line-through' : ''}`}
                value={todoDueDate}
                onChange={(e) => setTodoDueDate(e.target.value)}
                readOnly={!isTodoEditable}
            />

            <select
                value={todostatus}
                onChange={(e) => setTodostatus(e.target.value)}
                disabled={!isTodoEditable}
                className="border rounded p-2 text-black"
            >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>


            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? '📁' : '✏️'}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
