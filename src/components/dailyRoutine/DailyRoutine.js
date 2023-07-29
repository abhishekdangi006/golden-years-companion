import { toggleRoutine } from "../../redux/actions/routineActions";
import { useDispatch, useSelector } from "react-redux";

function DailyRoutine() {
  
  const routines = useSelector((state) => state.routines);
  const dispatch = useDispatch();
  const onToggle = (index)=>{
    dispatch(toggleRoutine(index))
  }
  
  return (
    <div className="container">
    <ul>
      {routines.map((routine,index) => (
        <li key={index}>
          <span className="content">{routine.text}</span>
          <span className={routine.completed ? 'completed':'pending'}>{routine.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{onToggle(index)}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default DailyRoutine;
