import {useState, useEffect} from 'react'
import {Axios} from './utils/axiosInstance'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodoName, setNewTodoName] = useState('')
  const [editingTodo, setEditingTodo] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      setLoading(true)
      const response = await Axios.get('/todo')
      if (response.data.success) {
        setTodos(response.data.data)
      } else {
        setError('Failed to fetch todos')
      }
    } catch (err) {
      setError(`Error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const addTodo = async () => {
    if (!newTodoName.trim()) return

    try {
      const response = await Axios.post('/todo', {name: newTodoName})
      if (response.data.success) {
        setTodos([...todos, response.data.data])
        setNewTodoName('')
      }
    } catch (err) {
      setError(`Failed to add todo: ${err.message}`)
    }
  }

  const deleteTodo = async (id) => {
    try {
      const response = await Axios.delete(`/todo/${id}`)
      if (response.data.success) {
        setTodos(todos.filter(todo => todo.id !== id))
      }
    } catch (err) {
      setError(`Failed to delete todo: ${err.message}`)
    }
  }

  const toggleComplete = async (todo) => {
    if (!todo.success) {
      try {
        const response = await Axios.patch(`/todo/${todo.id}/complete`)
        if (response.data.success) {
          setTodos(todos.map(t => t.id === todo.id ? {...t, success: true} : t))
        }
      } catch (err) {
        setError(`Failed to complete todo: ${err.message}`)
      }
    }
  }

  const startEditing = (todo) => {
    setEditingTodo(todo.id)
    setEditValue(todo.name)
  }

  const saveEdit = async () => {
    if (!editValue.trim()) return

    try {
      const response = await Axios.patch(`/todo/${editingTodo}`, {name: editValue})
      if (response.data.success) {
        setTodos(todos.map(todo =>
            todo.id === editingTodo ? {...todo, name: editValue} : todo
        ))
        setEditingTodo(null)
      }
    } catch (err) {
      setError(`Failed to update todo: ${err.message}`)
    }
  }

  return (
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-black text-xl font-bold md:text-2xl text-white px-4 md:px-8 py-2 shadow-md">Todo List</div>

        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-3 md:mx-5 mt-5">
              {error}
              <button
                  className="float-right font-bold"
                  onClick={() => setError(null)}
              >
                &times;
              </button>
            </div>
        )}

        <div className='flex flex-col justify-center items-center px-3 md:px-6'>
          {/* Add todo form */}
          <div className='flex flex-row justify-center w-full max-w-md'>
            <div className='border-2 p-2 md:p-3 w-full mt-6 md:mt-10 rounded-lg shadow-xl'>
              <div className='flex flex-col'>
                <input
                    type='text'
                    placeholder='Title of todo'
                    className='outline-0 pl-2 text-lg text-black font-bold w-full'
                    value={newTodoName}
                    onChange={(e) => setNewTodoName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                />
              </div>
            </div>
            <button
                className='p-2 md:p-3 border-2 border-green-600 mt-6 md:mt-10 items-center rounded-lg ml-3 md:ml-6 w-1/4
                        hover:bg-green-600 hover:text-white text-green-600 font-bold duration-300'
                onClick={addTodo}
            >
              Add
            </button>
          </div>

          {/* Todo list */}
          {loading ? (
              <div className="mt-6 md:mt-10 text-center">Loading todos...</div>
          ) : (
              <div className="space-y-3 md:space-y-4 p-3 md:p-5 bg-gray-400 mt-4 md:mt-5 rounded-lg w-full md:max-w-3xl max-h-80 overflow-y-auto mx-auto shadow-xl">
                {todos.length === 0 ? (
                    <div className="text-center bg-white p-3 md:p-4 rounded-lg">No todos yet! Add one above.</div>
                ) : (
                    todos.map((todo) => (
                        <div key={todo.id} className="flex flex-col md:flex-row justify-between bg-white p-3 rounded-lg">
                          <div className='flex flex-row items-center'>
                            <div
                                className={`${todo.success ? 'bg-green-400' : 'bg-red-400'} rounded-full w-8 h-8 flex-shrink-0 cursor-pointer`}
                                onClick={() => toggleComplete(todo)}
                                title={todo.success ? "Completed" : "Mark as complete"}
                            ></div>

                            {editingTodo === todo.id ? (
                                <input
                                    type="text"
                                    className="w-full  p-1.5 px-3 ml-2 border rounded"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                                    autoFocus
                                />
                            ) : (
                                <div className='break-words w-full p-1.5 px-3 ml-2 border rounded'>
                                  {todo.name}
                                </div>
                            )}
                          </div>

                          <div className="flex mt-2 md:mt-0 md:w-1/4 gap-2 w-full">
                            {editingTodo === todo.id ? (
                                <button
                                    className="bg-green-600 py-1 px-3 text-white font-bold text-center rounded-lg min-w-max"
                                    onClick={saveEdit}
                                >
                                  Save
                                </button>
                            ) : (
                                <button
                                    className="flex items-center justify-center bg-gray-700 py-1 px-3 text-white w-full font-bold text-center rounded-lg
                                              hover:bg-gray-500 duration-300 transition min-w-max"
                                    onClick={() => startEditing(todo)}
                                >
                                  Edit
                                </button>
                            )}
                            <button
                                className="bg-red-700 py-1 px-2 text-white font-bold text-center rounded-lg w-full
                                          hover:bg-red-500 duration-300 transition flex items-center justify-center"
                                onClick={() => deleteTodo(todo.id)}
                                title="Delete todo"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                    ))
                )}
              </div>
          )}
        </div>
      </div>
  )
}

export default App