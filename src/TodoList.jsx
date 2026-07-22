import TodolistItem from "./TodolistItem";

function TodoList({listOfTodos}){
    return(
        <>
            <ul>
                {listOfTodos?.map((todo)=>{
                    return <TodolistItem key={todo.id} todo={todo}/>
                })}
            </ul>
        </>
    )
}
export default TodoList;