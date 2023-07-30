import { toggleTodo } from "../../redux/actions/todoActions";
import style from "./todolist.module.css"
import { useDispatch, useSelector } from "react-redux";

function ToDoList() {
  
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onToggle = (index)=>{
    dispatch(toggleTodo(index))
  }
  
  return (
    <div className={style.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={style.list} key={todo.id}>
          <span className={style.text}>{todo.text}</span>
          <span className={todo.completed ? style.scompleted : style.spending}>{todo.completed ? 'Completed': 'Pending...'}</span>
          <button className={todo.completed ? style.completedbtn : style.pendingbtn}
          onClick={()=>{onToggle(index)}}
          >{todo.completed ? 'Cancel': 'Completed'}</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
