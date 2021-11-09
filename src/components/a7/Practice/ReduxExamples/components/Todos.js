import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: '', done: false});
    const dispatch = useDispatch();
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }

    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }

    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        dispatch(action);
    }

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const temp = {
            do: doValue
        };
        setTodo(temp);
    }

    const uni_key = 0;

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group" key={uni_key}>
                <li className="list-group-item" key={uni_key+1}>
                    <input onChange={todoChangeHandler} value={todo.do} className="form-control" key={uni_key+1}/>
                    <button onClick={createTodoClickHandler} className="btn btn-primary float-end" key={uni_key+1}>
                        Create a Todo
                    </button>
                </li>
                {
                    todos.map(todo =>
                        <li className="list-group-item" key={uni_key+2}>
                            <input checked={todo.done}
                                   onChange={(event) =>
                                       updateTodoClickHandler({...todo, done: event.target.checked})}
                                   type="checkbox"/>
                            {todo.do}
                            <button onClick={() => deleteTodoClickHandler(todo)} className="btn btn-danger float-end"
                                    key={uni_key+1}>
                                Delete a Todo
                            </button>
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;

