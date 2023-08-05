// import { toggleMedicine } from "../../redux/actions/medicineActions";
import { useDispatch, useSelector } from "react-redux";
import style from "./medicine.module.css";
import { actions } from "../../redux/reducers/medicineReducer";
// import { notificationReset } from "../../redux/reducers/notificationReducer";

function MedicineReminder() {
  
  const medicines = useSelector((state) => state.medicineReducer.medicines);
  const dispatch = useDispatch();
  // const message = useSelector(notificationSelector);

  const onToggle = (index)=>{
    // dispatch(toggleMedicine(index))
    dispatch(actions.toggle(index));
  }

  // if(message){
  //   setTimeout(()=> {dispatch(notificationReset());}, 3000);
  // }
  
  return (
    <div className={style.container}>
      {/* {message && <div class="alert alert-success" role="alert">
        {message}
      </div>} */}
    <ul>
      {medicines.map((medicine,index) => (
        <li className={medicine.completed ? style.completed : style.pending} key={index}>
            <span className={style.time}>{medicine.time}</span>
          <span className={style.name}>{medicine.name}</span>
          <span className={style.des}>{medicine.description}</span>
          <span className={medicine.completed ? style.status : style.statuspending}>{medicine.completed ? 'Taken': 'Pending...'}</span>
          <button className={medicine.completed ? style.completedbtn : style.pendingbtn}
          onClick={()=>{onToggle(index)}}
          >{medicine.completed ? '': 'Done'}</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default MedicineReminder;
