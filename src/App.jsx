import { useEffect, useState } from 'react'
import { TodoProvider } from './Context/Todocontext'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItems'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) =>prevTodo.id === id? {...prevTodo,  completed : !prevTodo.completed} : prevTodo ))
   }


  




  const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '',tasks:'',duedate:'',status:'' });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await gettasks();
        setTasks(response.data);
    };
   

  const handleCreateTask = async () => {
      await createTask(newTask);
      fetchTasks();
      setNewTask({ title: '', description: '',tasks:'',duedate:'',status:''  });
  };

  const handleUpdateTask = async (id) => {
      const updatedTask = { ...newTask, completed: true }; // Example of updating
      await updatedTask(id, updatedTask);
      fetchTasks();
  };

  const handleDeleteTask = async (id) => {
      await deleteTask(id);
      fetchTasks();
  };

  



  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo,toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key = {todo.id} className ='w-full'>
                <TodoItem todo ={todo}/>
                </div>
            ))}
          </div>
            </div>
      </div>
    </TodoProvider>
  )
}
export default App;
