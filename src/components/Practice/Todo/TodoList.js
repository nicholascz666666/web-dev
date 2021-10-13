import React from "react";
// import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoItem = (
    {todo}) => {
    // {console.log(todo)}

    return(
        <li>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}



const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo =>
                    <TodoItem todo={todo} />
                )
            }
        </ul>
    );
}
export default TodoList;




// const TodoList = () => {
//     return(
//         <ul>
//             {
//                 <TodoItem {todos}></TodoItem>
//             }
//         </ul>);
// }
