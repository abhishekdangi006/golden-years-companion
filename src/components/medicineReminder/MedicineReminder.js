import { toggleMedicine } from "../../redux/actions/medicineActions";
import { useDispatch, useSelector } from "react-redux";
import style from "./medicine.module.css";

function MedicineReminder() {
  
  const medicines = useSelector((state) => state.medicines);
  const dispatch = useDispatch();
  const onToggle = (index)=>{
    dispatch(toggleMedicine(index))
  }
  
  return (
    <div className={style.container}>
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
