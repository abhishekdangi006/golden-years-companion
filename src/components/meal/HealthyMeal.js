import { foods } from "../../data/data";
import style from "./meal.module.css";

function HealthyMeal () {
    return (
         <div className={style.container}>
            {
                foods.map((food, i) => 
                    <div key={i} className={style.con}>
                        <div className={style.title}>{food.title}</div>
                        <div className={style.mealcon}>
                            {food.meals.map((item, i2) => 
                                <div key={i2} className={style.meal}>
                                    <img src={item.img} alt="img"/>
                                    <div><p>{item.name}</p></div>
                                    </div>
                            )}
                            
                        </div>
                        <hr/>
                    </div>
                )
            }

         </div>
    )
}

export default HealthyMeal;