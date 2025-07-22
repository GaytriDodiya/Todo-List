import { useEffect, useState } from "react";
import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";


function App() {

  const [todos, setTodos] = useState([])

  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodos) {
    const newTodoList = [...todos, newTodos]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todos, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index) {
    const valueTodoEdited = todos[index];
    setTodoValue(valueTodoEdited)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodo = localStorage.getItem('todos')
    if (!localTodo) {
      return
    }

    localTodo = JSON.parse(localTodo).todos
    setTodos(localTodo)
  }, [])


  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} />
    </>
  );
}

export default App;
