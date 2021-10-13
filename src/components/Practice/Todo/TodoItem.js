// import React from "react";
//
// const todos =
//                 [{ "title": "Buy milk",               "status": "CANCELED",       "done": true    },
//                               { "title": "Pickup the kids",   "status": "IN PROGRESS",  "done": false  },
//                               { "title": "Walk the dog",       "status": "DEFERRED",        "done": false  }
//                           ]
//
// const TodoItem = (
//     {todo={title: "some tetx"}}) => {
//
//     return(
//         <li>
//             {console.log(todo)}
//             <input type="checkbox"
//                    defaultChecked={todo.done}/>
//             {todo.title}
//             ({todo.status})
//         </li>
//     );
// }
//
// const TodoList = () => {
//     return(
//         <ul>
//             {
//                 todos.map(todo =>
//                     <TodoItem {todo} />
//                 )
//             }
//         </ul>
//     );
// }
//
// export default TodoItem;


// const TodoItem = ({
//                       todos =
//                           [{ "title": "Buy milk",               "status": "CANCELED",       "done": true    },
//                               { "title": "Pickup the kids",   "status": "IN PROGRESS",  "done": false  },
//                               { "title": "Walk the dog",       "status": "DEFERRED",        "done": false  }
//                           ]
//                   }) => {
//     return(
//         todos.map(todo => {
//                 return (
//                     <li>
//                         <input type="checkbox"
//                                defaultChecked={todo.done}/>
//                         {todo.title}
//                         ({todo.status})
//                     </li>)
//             }
//         )
//
//     );
// }
// export default TodoItem;
