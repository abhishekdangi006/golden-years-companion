import { useState } from "react";
import style from "./todoform.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
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
    </div>
  );
}

export default ToDoForm;
