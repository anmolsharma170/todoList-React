import { useCallback, useState } from 'react'

import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodolistItem from './TodolistItem'

function App() {
  const [todos,setTodos] = useState([{value:'todo 1'}]);

  function deleteTodoByValue(value){
    setTodos(todos.filter(todo=>todo.value!=value));
  }

  const memodeleteTodoCallback = useCallback(deleteTodoByValue,[todos]);

  function onTodoFormSubmit(value){
    if(value){
      setTodos([...todos,{value}]);
    }
  }
  return (
    <>
    <TodoInput onSubmit={onTodoFormSubmit}/>
    <TodoList listOfTodos={todos} onDeleteTodo={memodeleteTodoCallback} />
    </>
  )
}

export default App
