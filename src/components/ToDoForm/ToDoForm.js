import { useState } from "react";
import style from "./todoform.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/reducers/todoReducer";
import { notificationReset, notificationSelector } from "../../redux/reducers/notificationReducer";
// import { addTodo } from "../../redux/actions/todoActions";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if(message){
    setTimeout(()=> {dispatch(notificationReset());}, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addTodo(todoText));
    dispatch(actions.add(todoText));
    setTodoText("");
  };


  return (
    <div className={style.container}>
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        required
        placeholder="Enter a TODO Task"
      />
      <button className={style.submit}>Create Todo</button>
      
    </form>
    {message && <div class="alert alert-success" role="alert">
        {message}
      </div>}
    </div>
  );
}

export default ToDoForm;
