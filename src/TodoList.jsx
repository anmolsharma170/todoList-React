import { memo, useCallback } from "react";
import TodolistItem from "./TodolistItem";

function TodoList({listOfTodos, onDeleteTodo}){



    function deleteTodo(value){
        console.log('Delete todo with ID: ',value);
        onDeleteTodo?.(value);
    }

    const memoDeleteTodoCallback = useCallback(deleteTodo,[onDeleteTodo]);
    return(
        <>
            <ul>
                {listOfTodos?.map((todo)=>{
                    return <TodolistItem key={todo.value} todo={todo} onDelete={memoDeleteTodoCallback}/>
                })}
            </ul>
        </>
    )
}
export default memo(TodoList);