import { toggleRoutine } from "../../redux/actions/routineActions";
import { useDispatch, useSelector } from "react-redux";
import style from "../medicineReminder/medicine.module.css"

function DailyRoutine() {
  
  const routines = useSelector((state) => state.routines);
  const dispatch = useDispatch();
  const onToggle = (index)=>{
    dispatch(toggleRoutine(index))
  }
  
  return (
    <div className={style.container}>
    <ul>
      {routines.map((routine,index) => (
        <li className={routine.completed ? style.completed : style.pending} key={index}>
          <span className={style.time}>{routine.time}</span>
          <span className={style.text}>{routine.text}</span>
          <span className={routine.completed ? style.status : style.statuspending}>{routine.completed ? 'Completed': 'Pending...'}</span>
          <button className={routine.completed ? style.completedbtn : style.pendingbtn}
          onClick={()=>{onToggle(index)}}
          >{routine.completed ? '': 'Done'}</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default DailyRoutine;
