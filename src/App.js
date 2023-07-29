import { Provider } from "react-redux";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import { medicineStore, routineStore, store } from "./redux/store";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import DailyRoutine from "./components/dailyRoutine/DailyRoutine";
import MedicineReminder from "./components/medicineReminder/MedicineReminder";
import HealthyMeal from "./components/meal/HealthyMeal";



function App() {

  const router = createBrowserRouter([
    {path: "" , element: <Nav/>, children: [
      {path: "", element: <Home/>},
      {path: "myday", element: <Provider store={store}><TodoForm/><TodoList/></Provider>},
      {path: "routine", element: <Provider store={routineStore}><DailyRoutine/></Provider>},
      {path: "medicine", element: <Provider store={medicineStore}><MedicineReminder/></Provider>},
      {path: "meal", element: <HealthyMeal/>}
    ]}
  ])

  return (
    <div>
      
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
