import { toggleMedicine } from "../../redux/actions/medicineActions";
import { useDispatch, useSelector } from "react-redux";

function MedicineReminder() {
  
  const medicines = useSelector((state) => state.medicines);
  const dispatch = useDispatch();
  const onToggle = (index)=>{
    dispatch(toggleMedicine(index))
  }
  
  return (
    <div className="container">
    <ul>
      {medicines.map((medicine,index) => (
        <li key={index}>
            <span className="content">{medicine.time}</span>
          <span className="content">{medicine.name}</span>
          <span className="content">{medicine.description}</span>
          <span className={medicine.completed ? 'completed':'pending'}>{medicine.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{onToggle(index)}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default MedicineReminder;
