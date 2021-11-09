import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map((t,key) => {
                    return(<TodoItem todo={t} key={key}/>);
                })
            }
        </ul>
    );
}
export default TodoList;